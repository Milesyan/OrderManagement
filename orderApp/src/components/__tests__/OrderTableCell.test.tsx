import OrderTableCell, {OrderTableHeader} from '../OrderTableCell';
import TestRenderer from 'react-test-renderer';

test('render OrderTableCell', () => {
  const tableHeader = TestRenderer.create(<OrderTableHeader/>)
  expect(tableHeader).toMatchSnapshot();
  const tableCell = TestRenderer.create(<OrderTableCell
    order={{
      id: 'xxx-order',
      event_name: "DRIVER_RECEIVED",
      price: 9999,
      item: 'example-item',
      customer: 'miles',
      destination: 'destination'
    }}
  />)
  expect(tableCell).toMatchSnapshot();
});