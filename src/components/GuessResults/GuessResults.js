import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({ guesses, guessLimit, answer }) {

  return (
    <div className="guess-results">
      { range(guessLimit).map( (num) => (
        <Guess 
          value={guesses[num] ? guesses[num].guess : undefined} 
          answer={answer} 
          key={guesses[num] ? guesses[num].id : num} 
        />
      ))}
    </div>
  );
}

export default GuessResults;
