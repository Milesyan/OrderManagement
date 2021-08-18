import Layout from 'basicComponents/components/Layout';
import OrderApp from 'orderApp/page/orderApp'
import React from 'react';
import { Switch, Route, Redirect, HashRouter} from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <HashRouter>
        <React.Suspense fallback={"Loading"}>
          <Switch>
            <Route path="/order">
              <OrderApp />
            </Route>
            <Redirect to='/order' />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </Layout>
  )
}