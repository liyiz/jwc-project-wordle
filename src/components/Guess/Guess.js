import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess( {value, answer} ) {

  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      { range(5).map((num) => {
        const classToApply = value ? 'cell ' + result[num].status : 'cell';
        return (
          <span className={classToApply} key={ crypto.randomUUID() }>
            {result ? result[num].letter : undefined}
          </span>
        )
      })}
    </p>
  );

}

export default Guess;
