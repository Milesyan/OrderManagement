import {useEffect} from 'react';
//@ts-ignore
import io from 'socket.io-client';
import {ISocketCallback} from 'src/types';

export default function useSocket(url: string, events: ISocketCallback[]) {
  useEffect(() => {
    //@ts-ignore
    const socket = io(url);
    for (const e of events) {
      socket.on(e.eventName, e.callback);
    }
  }, [])
}