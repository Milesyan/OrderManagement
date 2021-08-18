import useSocket from './useSocket';
import { useImmer } from "use-immer";
import {IOrder} from 'src/types';
import {enableMapSet} from 'immer';
import {MutableRefObject, useRef} from 'react';
enableMapSet();

export interface IOrderData {
  idOrderMap: Map<string, IOrder>;
  priceIdMap: Map<number, Set<string>>;
}
export default function useOrderEvents(): IOrderData{
  const [orderData, setOrderData] = useImmer<IOrderData>({
    idOrderMap: new Map<string, IOrder>(),
    priceIdMap: new Map<number, Set<string>>()
  })
  const updateCallback = (orders: IOrder[]) => {
    setOrderData(draft => {
      for (const order of orders) {
        if (!draft.priceIdMap.get(order.price)) {
          draft.priceIdMap.set(order.price, new Set([order.id]))
        } else {
          draft.priceIdMap.get(order.price)?.add(order.id)
        }
        draft.idOrderMap.set(order.id, order)
      }
    })
  }
  useSocket('ws://localhost:9001', [
    {
      eventName: 'order_event', 
      callback: updateCallback
    }
  ])
  return orderData
}
