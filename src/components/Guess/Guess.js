import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell( {letter, className} ) {
  return (          
    <span className={className} key={ crypto.randomUUID() }>
      {letter}
    </span>
  )
}

function Guess( {value, answer} ) {

  const result = checkGuess(value, answer);
  console.log(result);

  return (
    <p className="guess">
      { range(5).map((num) => {
        const classToApply = value ? 'cell ' + result[num].status : 'cell';
        return (
          <Cell 
            letter={result ? result[num].letter : undefined} 
            className={classToApply} 
            key={crypto.randomUUID()} 
          />
        )
      })}
    </p>
  );

}

export default Guess;
