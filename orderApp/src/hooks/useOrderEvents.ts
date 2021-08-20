import useSocket from './useSocket';
import { useImmer } from "use-immer";
import {IOrder} from 'src/types';
import {enableMapSet} from 'immer';
import CONFIGS from '../env';
enableMapSet();

export interface IOrderData {
  idOrderMap: Map<string, IOrder>;
  priceIdMap: Map<number, Set<string>>;
}

export const orderDataMutableUpdater = (origin: IOrderData, orders: IOrder[]) => {
  for (const order of orders) {
    // update price to orderId Map
    if (!origin.priceIdMap.get(order.price)) {
      origin.priceIdMap.set(order.price, new Set([order.id]))
    } else {
      origin.priceIdMap.get(order.price)?.add(order.id)
    }
    // update Id to order Map
    origin.idOrderMap.set(order.id, order)
  }
}
export default function useOrderEvents(): IOrderData{
  const [orderData, setOrderData] = useImmer<IOrderData>({
    idOrderMap: new Map<string, IOrder>(),
    priceIdMap: new Map<number, Set<string>>()
  })
  const updateCallback = (orders: IOrder[]) => {
    setOrderData(draft => {
      orderDataMutableUpdater(draft, orders)
    })
  }
  useSocket(CONFIGS.ORDER_SERVER_HOST, [
    {
      eventName: 'order_event', 
      callback: updateCallback
    }
  ])
  return orderData
}
