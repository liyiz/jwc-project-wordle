import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({ guesses, guessLimit }) {

  return (
    <div className="guess-results">
      { guesses.map( (guess) => (
        <Guess data={guess} key={guess.id} />
      ))}
      { range(guesses.length, guessLimit).map(() => (
        <Guess key={crypto.randomUUID()} />
      ))}

    </div>
  );
}

export default GuessResults;
