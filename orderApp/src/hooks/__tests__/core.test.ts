import {orderDataMutableUpdater} from '../useOrderEvents';

test('test orderDataMutableUpdater logic', () => {
  const data = {
    idOrderMap: new Map(),
    priceIdMap: new Map()
  };
  orderDataMutableUpdater(data, [{
    "customer": "Karina Lopez",
    "destination": "89548 Andrew Road Apt. 797, Lake Phillipville, CA 92007",
    "event_name": "COOKED",
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
  }])
  expect(data).toMatchSnapshot();
  // update status of same id
  orderDataMutableUpdater(data, [{
    "customer": "Karina Lopez",
    "destination": "89548 Andrew Road Apt. 797, Lake Phillipville, CA 92007",
    "event_name": 'DRIVER_RECEIVED',
    "id": "b11b8a69",
    "item": "Fish tacos",
    "price": 8700,
    "sent_at_second": 30
  }])
  expect(data).toMatchSnapshot();
  expect(data.idOrderMap.get('b11b8a69')?.event_name).toBe('DRIVER_RECEIVED');
  // Add new order with same price
  orderDataMutableUpdater(data, [{
    "customer": "Karina Lopez",
    "destination": "89548 Andrew Road Apt. 797, Lake Phillipville, CA 92007",
    "event_name": 'CREATED',
    "id": "b11b8a69xxx",
    "item": "Fish tacos",
    "price": 8700,
    "sent_at_second": 30
  }])
  expect(data).toMatchSnapshot();
  expect(data.priceIdMap.get(8700)).toEqual(new Set(['b11b8a69xxx', 'b11b8a69']))
});