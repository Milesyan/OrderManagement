# Order management system example

It's a lerna project with webpack 5 module federation. 

The `basicComponent` project contains the basic components, e.g. Table, Layout, etc.
The `orderApp` project contains the main business logic of the challenge.
The `container` project is the shell to serve different apps, for now there is only order app in it. It provides common logic like navigator, login (if needed), etc.

This is to make the system easy to scale if there are more features required in the future. And each project can be developed independently.

# Commands

Run `yarn` to install the dependencies.
Run `yarn start`. This will serve `container`, `orderApp` and `basicComponent` projects on port 3000, 3001 and 3002 respectively.
Run `yarn test` to run the unit test cases and `yarn test:u` to update test snapshots.

- [localhost:3000](http://localhost:3000/) for the container app
- [localhost:3001](http://localhost:3001/) for the order management app
- [localhost:3002](http://localhost:3002/) for the basic components app

# Data algorithm

The data is saved as the following structure:

```
interface IOrderData {
  idOrderMap: Map<string, IOrder>;
  priceIdMap: Map<number, Set<string>>;
}
```

In each loop, the order data is saved as an id-to-order Map and price-to-id Map.

I use Map in id-to-order Map because it can keep the insertion order of keys, and to make it O(1) time complexity when the data is updated(if use array, finding the previous data will be O(n) time complexity). 

When uses search the price, the price-to-id Map will make it O(1) time complexity.

# Performance

In the orderTable component, it shows the first 30 data items in the initial state; and the showing count keeps growing when user scrolls the page down. 

I used React.memo to avoid row component re-rendering too often, only id and event_status changes will cause re-render. 
