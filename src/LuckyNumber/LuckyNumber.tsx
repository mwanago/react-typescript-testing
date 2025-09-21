import { useState } from 'react';
import { getRandomNumber } from './getRandomNumber';

export const LuckyNumber = () => {
  const [number] = useState(() => getRandomNumber());

  return <p>Your lucky number is: {number}</p>;
};
