import useOrderEvents from '../hooks/useOrderEvents';
import OrderTable from 'app1/components/OrderTable';
import Layout from 'app1/components/Layout';


export default function Home() {
  const orderData = useOrderEvents()
  return (
    <Layout>
      <OrderTable orderData={orderData} supportSearch={true} />
    </Layout>
  )
}