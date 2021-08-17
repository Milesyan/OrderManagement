import useOrderEvents from '../hooks/useOrderEvents';
//@ts-ignore
import OrderTable from 'app1/OrderTable';
//@ts-ignore
import Layout from 'app1/Layout';
export default function Home() {
  const orderData = useOrderEvents()
  return (
    <Layout>
      <OrderTable orderData={orderData} supportSearch={true} />
    </Layout>
  )
}