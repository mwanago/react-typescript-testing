import { FunctionComponent, useState } from 'react';

interface Props {
  initialValue?: boolean;
}

export const Toggle: FunctionComponent<Props> = ({ initialValue = false }) => {
  const [isOn, setIsOn] = useState(initialValue);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {isOn && <p>ON</p>}
    </div>
  );
};
