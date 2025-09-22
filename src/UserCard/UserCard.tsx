import type { FunctionComponent } from 'react';

interface Props {
  name: string;
  age?: number;
}

export const UserCard: FunctionComponent<Props> = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      {age && (
        <div>
          <p>Age:</p>
          <p>{age}</p>
        </div>
      )}
    </div>
  );
};
