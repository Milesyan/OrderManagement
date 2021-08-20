import Layout from '../Layout';
import Nav from '../Nav';
import Search from '../Search';
import Table from '../Table';
import TestRenderer from 'react-test-renderer';

test('render Layout components', () => {
  const ele = TestRenderer.create(<Layout title="Demo title"/>)
  expect(ele).toMatchSnapshot()
});

test('render Nav components', () => {
  const ele = TestRenderer.create(<Nav title="Demo Nav title"/>)
  expect(ele).toMatchSnapshot()
});

test('render Search components', () => {
  const ele = TestRenderer.create(<Search text="demo Search" onSearchTermUpdate={() => {}}/>)
  expect(ele).toMatchSnapshot()
});

test('render Table components', () => {
  const ele = TestRenderer.create(<Table 
      renderHeader={() => <div>Example header</div>}
      renderContent={() => <div>Exmaple content</div>}
  />)
  expect(ele).toMatchSnapshot()
});
