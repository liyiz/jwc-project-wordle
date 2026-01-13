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

  const [guesses, setGuesses] = React.useState([]);

  function handleSubmit(tentativeGuess) {
    console.log({ tentativeGuess });

    const guessData = {}
    guessData.id = `${tentativeGuess}-${crypto.randomUUID()}`;
    guessData.guess = tentativeGuess;

    const nextGuesses = [...guesses, guessData];
    setGuesses(nextGuesses);
    console.log({ nextGuesses });

    // checkGuess

  }

  return <>
    <GuessResults guesses={guesses}/>
    <GuessInput handleSubmit={handleSubmit} />
  </>;
}

export default Game;
