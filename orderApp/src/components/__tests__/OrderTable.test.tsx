import OrderTable, {IOrderTable} from '../OrderTable';
import TestRenderer from 'react-test-renderer';

jest.mock('basicComponents/components/Table', 
  () => { 
    return (props: any) => (
      <>
        {props.supportSearch && <div>Search Slot</div>}
        <table style={{width: '100%'}}>
        <thead>
          {props.renderHeader?.()}
        </thead>
        <tbody>
          {props.renderContent?.()}
        </tbody>
      </table>
      </>
    )
  },
  { virtual: true }
);

beforeAll(() =>{
  // @ts-ignore
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
  
    disconnect() {
      return null;
    }
  
    observe() {
      return null;
    }
  
    takeRecords() {
      return null;
    }
  
    unobserve() {
      return null;
    }
  };
})
test('render OrderTable', () => {
  const props: IOrderTable = {
    supportSearch: true,
    "orderDataMap": new Map(Object.entries({
      "b11b8a69": {
        "customer": "Karina Lopez",
        "destination": "89548 Andrew Road Apt. 797, Lake Phillipville, CA 92007",
        "event_name": "DRIVER_RECEIVED",
        "id": "b11b8a69",
        "item": "Fish tacos",
        "price": 8700,
        "sent_at_second": 30,
      },
      "0b63508d": {
        "customer": "Heather Hughes",
        "destination": "7465 Willis Fork, Lake Gabrielle, CA 92816",
        "event_name": "CREATED",
        "id": "0b63508d",
        "item": "Berry smoothie",
        "price": 8029,
        "sent_at_second": 5,
      },
    })),
    "priceCache": new Map(
      [[8700, new Set(['b11b8a69'])],
      [8029, new Set(['0b63508d'])]]
    )
  }
  const ele = TestRenderer.create(<OrderTable
    {...props}
  />)
  expect(ele).toMatchSnapshot()
});

