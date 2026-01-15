import React from 'react';
import { range } from '../../utils';

function Guess( {data} ) {

  if (data === undefined) {
    return (
      <p className="guess" key={ crypto.randomUUID() }>
        { range(0, 5).map(() => (
          <span className="cell" key={ crypto.randomUUID() }></span>
        ))}
      </p>
    );
  }

  const guessArray = data.guess.split('');

  return (
    <p className="guess" key={ data.id }>
      { guessArray.map( (letter) => {
        return <span className="cell" key={ crypto.randomUUID() }> { letter } </span>
      })}
    </p>
  );

}

export default Guess;
