export interface ISocketCallback {
  eventName: string;
  callback: (data: any) => void;
}

export interface IOrder {
  id: string;
  event_name: "CREATED" | "COOKED" | "DRIVER_RECEIVED" | 'DELIVERED' | 'CANCELLED';
  price: number;
  item: string;
  customer: string;
  destination: string;
  sent_at_second?:number;
}

export type IOrderStatus = 'Created' | 'Cooked' | 'Driver Received' | 'Delivered' | 'Cancelled'
