import React, {useEffect} from 'react';
//@ts-ignore
import OrderTable from 'app1/OrderTable';
//@ts-ignore
import Layout from 'app1/Layout';
import Home from './page/home';

export default function App() {

  return (
    <Layout>
      <Home/>
    </Layout>
    // <div style={{margin: '20px'}}>
      /* <React.Suspense fallback="Loading header...">
        <div
          style={{
            border: '1px dashed black',
            height: '50vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <h1>CONTAINER</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                marginRight: '2rem',
                padding: '2rem',
                border: '1px dashed black',
              }}
            >
              <h2>APP-1</h2>
              <OrderTable data={"test"}/>
            </div>
            <div style={{border: '1px dashed black', padding: '2rem'}}>
              <h2>APP-2</h2>
              <CounterAppTwo />
            </div>
          </div>
        </div>
      </React.Suspense> */
    // </div>
  )
}