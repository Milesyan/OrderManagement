import {memo} from "react";
import {IOrder, IOrderStatus} from "src/types";
import styles from './OrderTableCell.module.css';

interface IOrderTableCell {
  order: IOrder;
}
const EVENT_STATUS_MAP: {[key in IOrder['event_name']]: IOrderStatus} = Object.freeze({
  'CREATED': 'Created',
  'COOKED': 'Cooked',
  'DRIVER_RECEIVED': 'Driver Received',
  'DELIVERED': 'Delivered',
  'CANCELLED': 'Cancelled'
})
function centsToDollar(cents: number) {
  return (cents/100).toLocaleString("en-US", {style:"currency", currency:"USD"});

}
const OrderTableCell = (props: IOrderTableCell) => {
  const {order} = props;
  return (
    <tr className={styles.cellRoot}>
      <th className={styles.item}>
        {order.item}
      </th>
      <th className={styles.customer}>
        {order.customer}
      </th>
      <th className={styles.price}>
        {centsToDollar(order.price)}
      </th>
      <th className={styles.destination}>
        {order.destination}
      </th>
      <th className={styles.status}>
        {EVENT_STATUS_MAP[order.event_name] ?? order.event_name}
      </th>
    </tr>
  )
}

export default memo(OrderTableCell);

export function OrderTableHeader() {
  return (
    <tr className={`${styles.cellRoot} ${styles.headerCell}`}>
      <th className={styles.item}>
        Item
      </th>
      <th className={styles.customer}>
        Customer Name
      </th>
      <th className={styles.price}>
        Price
      </th>
      <th className={styles.destination}>
        Destination
      </th>
      <th className={styles.status}>
        Order Status
      </th>
    </tr>)
}