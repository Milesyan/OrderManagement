import React, {useState} from 'react';
import Divider from '../common/Divider';
import {IOrder} from '../types';
import OrderTableCell, {OrderTableHeader} from './OrderTableCell';
import Search from './Search';

interface IOrderTable {
  orderData: IOrder[];
  supportSearch: boolean;
}
export default function OrderTable(props: IOrderTable) {
  const [searchTerm, setSearchTerm] = useState('');
  const _searchCents = Math.round(parseFloat(searchTerm) * 100);
  const shownOrderData = searchTerm ?
    props.orderData.filter(o => o.price === _searchCents)
    : props.orderData
  return (
    <>
      {
        props.supportSearch &&
        <>
          <Search onSearchTermUpdate={setSearchTerm} count={shownOrderData.length} />
          <Divider />
        </>
      }
      <table style={{width: '100%'}}>
        <thead>
          <OrderTableHeader />
        </thead>
        <tbody>
          {
            shownOrderData.map(o => (
              <OrderTableCell key={o.id} order={o} />
            ))
          }
        </tbody>
      </table>
    </>
  );
}

