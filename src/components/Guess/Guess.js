import React from 'react';
import { range } from '../../utils';

function Guess( {value} ) {

  return (
    <p className="guess">
      { range(5).map((num) => (
        <span className="cell" key={ crypto.randomUUID() }>
          {value ? value.guess[num] : undefined}
        </span>
      ))}
    </p>
  );

}

export default Guess;
