import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click</button>
      <p>The number of clicks: {count}</p>
    </div>
  );
};
