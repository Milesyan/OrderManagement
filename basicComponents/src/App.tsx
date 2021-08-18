import React from 'react';
import OrderTable from './components/OrderTable';

export default function App() {
  return (
    <div style={{margin: '20px auto', maxWidth: '1080'}}>
      <OrderTable 
      supportSearch={true}
        orderData={[{
          "customer": "Karina Lopez",
          "destination": "89548 Andrew Road Apt. 797, Lake Phillipville, CA 92007",
          "event_name": "DELIVERED",
          "id": "b11b8a69",
          "item": "Fish tacos",
          "price": 8700,
          "sent_at_second": 30
      },
      {
          "customer": "Heather Hughes",
          "destination": "7465 Willis Fork, Lake Gabrielle, CA 92816",
          "event_name": "CREATED",
          "id": "0b63508d",
          "item": "Berry smoothie",
          "price": 8029,
          "sent_at_second": 5
      },]} />
    </div>
  )
}
