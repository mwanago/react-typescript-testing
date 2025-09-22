import { useMemo } from 'react';
import { getRandomNumber } from './getRandomNumber';

export const LuckyNumber = () => {
  const number = useMemo(() => getRandomNumber(), []);

  return <p>Your lucky number is: {number}</p>;
};
