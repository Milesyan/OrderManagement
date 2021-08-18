import React, {MutableRefObject, ReactElement, useEffect, useRef, useState} from 'react';
import Divider from '../common/Divider';
import {IOrder} from '../types';
import OrderTableCell, {OrderTableHeader} from './OrderTableCell';
import Search from './Search';

interface ITable {
  supportSearch: boolean;
  count: number;
  renderHeader: ReactElement;
  renderContent: ReactElement;
  onSearchUpdate: (term: string) => void;
}
export default function Table(props: ITable) {


  return (
    <>
      {
        props.supportSearch &&
        <>
          <Search onSearchTermUpdate={props.onSearchUpdate} count={props.count} />
          <Divider />
        </>
      }
      <table style={{width: '100%'}}>
        <thead>
          {props.renderHeader}
        </thead>
        <tbody>
          {props.renderContent}
        </tbody>
      </table>
    </>
  );
}

