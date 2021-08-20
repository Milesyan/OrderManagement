import Divider from '../Divider';
import TestRenderer from 'react-test-renderer';

test('adds 1 + 2 to equal 3', () => {
  const ele = TestRenderer.create(<Divider/>)
  expect(ele).toMatchSnapshot()
});