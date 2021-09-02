import {memo} from "react";
import {IOrder, IOrderStatus} from "src/types";
import styles from './OrderTableCell.module.css';

interface IOrderTableCell {
  order: IOrder;
  setUpdatingData: (order: IOrder) => void
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
  const STATUS_COLOR_MAP: {[key in IOrder['event_name']]?: string} = {
    'CREATED': 'transparent',
    'COOKED': 'lightcyan',
    'DRIVER_RECEIVED': 'lightyellow',
    'DELIVERED': 'lightgreen',
    'CANCELLED': 'lightcoral'
  }
  const onClickUpdate = () => {
    props.setUpdatingData(props.order)
  }
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
      <th className={styles.status} style={{backgroundColor: STATUS_COLOR_MAP[order.event_name]}}>
        {EVENT_STATUS_MAP[order.event_name] ?? order.event_name}
      </th>
      <th className={styles.status}>
        <button onClick={onClickUpdate}>
          Update
        </button>
      </th>
    </tr>
  )
}

export default memo(OrderTableCell, (prev, curr) => prev.order.id === curr.order.id && prev.order.event_name === curr.order.event_name
 && prev.order.customer === curr.order.customer);

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
      <th className={styles.status}>
        Actions
      </th>
    </tr>)
}