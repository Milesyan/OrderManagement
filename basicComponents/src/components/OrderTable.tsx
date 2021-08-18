import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import Divider from '../common/Divider';
import {IOrder} from '../types';
import OrderTableCell, {OrderTableHeader} from './OrderTableCell';
import Search from './Search';

interface IOrderTable {
  orderDataMap: Map<string, IOrder>;
  priceCache: Map<number, Set<string>>;
  supportSearch: boolean;
}
export default function OrderTable(props: IOrderTable) {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<IOrder[]>([])
  const ref = useRef<HTMLDivElement>(null);
  const [showCount, setShowCount] = useState(30);
  const shownKeys = Array.from(props.orderDataMap.keys()).slice(0, showCount);
  const shownOrdersData = searchTerm ? searchResults : shownKeys.map(k => props.orderDataMap.get(k) as IOrder)
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((e) => {
        if (e.intersectionRatio > 0 && shownKeys.length >=30) {
          setShowCount(c => c+5);
        }
      });
    };
    const observer = new IntersectionObserver(callback, { rootMargin: "600px" });
    observer.observe(ref.current!);
    return () => {
      observer?.unobserve(ref.current!);
      observer?.disconnect();
    };
  }, [shownKeys, ref.current])
  
  useEffect(() => {
    const _searchCents = Math.round(parseFloat(searchTerm) * 100);
    const _ids = props.priceCache.get(_searchCents) ?? [];
    setSearchResults(Array.from(_ids).map(_id => props.orderDataMap.get(_id) as IOrder).filter(o => !!o))
  }, [searchTerm, props.priceCache])

  return (
    <>
      {
        props.supportSearch &&
        <>
          <Search onSearchTermUpdate={setSearchTerm} count={ searchTerm ? shownOrdersData.length: props.orderDataMap.size} />
          <Divider />
        </>
      }
      <table style={{width: '100%'}}>
        <thead>
          <OrderTableHeader />
        </thead>
        <tbody>
          {
            shownOrdersData.map(o => (
              <OrderTableCell key={o.id} order={o} />
            ))
          }
        </tbody>
      </table>
      <div ref={ref} style={{ height: 0, width: 0 }} />
    </>
  );
}

