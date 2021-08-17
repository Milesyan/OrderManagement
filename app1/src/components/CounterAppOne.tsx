import React, { useState } from 'react';

const Counter = ({data}: any) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {data}
      <p>
        Add by one each click <strong>APP-1</strong>
      </p>
      <p>Your click count : {count} </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
