import React from 'react';
import useSocket from '../hooks/useSocket';

export default function Home() {
  
  useSocket('ws://localhost:9001', [
    {
      eventName: 'order_event', callback: (data: any) => {
        console.warn('receive', data)
      }
    }
  ])
  return (
    <div>
      Home
    </div>
  )
}