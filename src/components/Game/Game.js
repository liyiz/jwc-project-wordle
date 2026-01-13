import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmit() {
    console.log({guess});

    const guessData = {}
    guessData.id = crypto.randomUUID();
    guessData.guess = guess;

    const nextGuesses = [...guesses];
    nextGuesses.push(guessData);
    setGuesses(nextGuesses);
    console.log({nextGuesses});

    // checkGuess

    setGuess(''); // clear input value after checking guess
  }

  return <>
    <GuessResults guesses={guesses} setGuesses={setGuesses} />
    <GuessInput guess={guess} setGuess={setGuess} handleSubmit={handleSubmit} />
  </>;
}

export default Game;
