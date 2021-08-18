import Layout from 'basicComponents/components/Layout';
import OrderApp from 'orderApp/page/orderApp'
import React from 'react';
import { Switch, Route, Redirect, BrowserRouter} from "react-router-dom";

export default function Home() {
  return (
    <Layout title="Food Orders Manage System">
      <BrowserRouter>
        <React.Suspense fallback={"Loading"}>
          <Switch>
            <Route path="/order">
              <OrderApp />
            </Route>
            <Redirect to='/order' />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </Layout>
  )
}