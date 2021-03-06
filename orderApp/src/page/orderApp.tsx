import useTitle from '../hooks/useTitle';
import OrderTable from '../components/OrderTable';
import useOrderEvents from '../hooks/useOrderEvents';

export default function Home() {
  const [orderData, updateOneOrder] = useOrderEvents()
  useTitle('Food Order Manage System')
  return (
    <>
      <OrderTable
        orderDataMap={orderData.idOrderMap} 
        priceCache={orderData.priceIdMap}
        updateOneOrder={updateOneOrder}
        supportSearch={true} />
    </>
  )
}