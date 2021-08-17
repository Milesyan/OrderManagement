import useOrderEvents from '../hooks/useOrderEvents';
//@ts-ignore
import OrderTable from 'app1/OrderTable';

export default function Home() {
  const orderData = useOrderEvents()
  return (
    <div>
      Home
      <OrderTable orderData={orderData} supportSearch={true}/>
    </div>
  )
}