import Divider from '../Divider';
import TestRenderer from 'react-test-renderer';

test('render common components', () => {
  const ele = TestRenderer.create(<Divider/>)
  expect(ele).toMatchSnapshot()
});