import React from 'react';
import { range } from '../../utils';

function Guess( {value} ) {

  return (
    <p className="guess">
      { range(5).map((num) => {
        const classToApply = value ? 'cell ' + value.evaluated[num].status : 'cell';
        return (
        <span className={ classToApply } key={ crypto.randomUUID() }>
          {value ? value.evaluated[num].letter : undefined}
        </span>)
      })}
    </p>
  );

}

export default Guess;
