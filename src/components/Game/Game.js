import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  function handleSubmit(tentativeGuess) {
    console.log({ tentativeGuess });

    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const guessData = {}
    guessData.id = `${tentativeGuess}-${crypto.randomUUID()}`;
    guessData.guess = tentativeGuess;

    const nextGuesses = [...guesses, guessData];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED ) {
      setStatus('lost');
    }

  }

  return <>
    {/* {`Guesses made: ${guesses.length} Game status: ${status}`} */}
    <GuessResults guesses={guesses} guessLimit={NUM_OF_GUESSES_ALLOWED} answer={answer} />
    <GuessInput handleSubmit={handleSubmit} status={status} />
    {(status === 'won') && (<WonBanner numOfGuesses={guesses.length} />)}
    {(status === 'lost') && (<LostBanner answer={answer} />)}
  </>;
}

export default Game;
