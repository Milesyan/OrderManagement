export interface ISocketCallback {
  eventName: string;
  callback: (data: any) => void;
}