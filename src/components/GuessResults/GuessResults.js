import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({ guesses, guessLimit }) {
  return (
    <div className="guess-results">
      { range(guessLimit).map( (num) => (
        <Guess value={guesses[num]} key={guesses[num] ? guesses[num].id : num} />
      ))}
    </div>
  );
}

export default GuessResults;
