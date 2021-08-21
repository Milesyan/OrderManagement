import Layout from './components/Layout';
import Table from './components/Table'
export default function App() {
  return (
    <div style={{margin: '20px auto', maxWidth: '1080'}}>
      <Layout
        title="Basic Component Demo"
      >
        <Table
          renderHeader={() => (
            <tr >
            <th >
              Item
            </th>
            <th>
              Customer Name
            </th>
            <th>
              Price
            </th>
            <th>
              Destination
            </th>
            <th>
              Order Status
            </th>
          </tr>
          )}
        />
      </Layout>
    </div>
  )
}
