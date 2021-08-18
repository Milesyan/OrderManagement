import useSocket from './useSocket';
import { useImmer } from "use-immer";
import {IOrder} from 'src/types';

export default function useOrderEvents() {
  const [orderData, updateOrderData] = useImmer<IOrder[]>([])
  useSocket('ws://localhost:9001', [
    {
      eventName: 'order_event', 
      callback: (orders: IOrder[]) => {
        updateOrderData(draft => {
          const ids = new Set(draft.map(o => o.id));
          orders.forEach(order => {
            if (ids.has(order.id)) {
              // order id exists
              const existOrder = draft.find(o => o.id == order.id);
              Object.assign(existOrder, order)
            } else {
              // new order
              draft.push(order)
            }
          })
        })
      }
    }
  ])
  return orderData
}
