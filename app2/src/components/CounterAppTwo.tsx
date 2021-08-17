import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={() => setCount((prevState) => prevState * 2)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
