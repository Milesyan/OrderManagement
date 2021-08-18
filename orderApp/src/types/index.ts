export interface ISocketCallback {
  eventName: string;
  callback: (data: any) => void;
}

export interface IOrder {
  id: string;
  event_name: "CREATED" | "COOKED" | "DRIVER_RECEIVED";
  price: number;
  item: string;
  customer: string;
  destination: string;
}
