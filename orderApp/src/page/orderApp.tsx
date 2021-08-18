import useOrderEvents from '../hooks/useOrderEvents';
import OrderTable from 'basicComponents/components/OrderTable';

export default function Home() {
  const orderData = useOrderEvents()
  return (
    <>
      <OrderTable 
        orderDataMap={orderData.idOrderMap} 
        priceCache={orderData.priceIdMap}
        supportSearch={true} />
    </>
  )
}