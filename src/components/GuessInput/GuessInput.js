import React from 'react';
import '../../styles.css';

function GuessInput() {

  const [guess, setGuess] = React.useState('');

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        const nextGuess = {};
        nextGuess.guess = guess.toUpperCase();

        console.log(nextGuess);
        // checkGuess

        setGuess(''); // clear input value after checking guess
      }}
    >
      <label htmlFor="guess-input">{'Enter guess:'}</label>
      <input 
        id="guess-input" 
        type="text" 
        pattern="[a-zA-Z]{5}" /* RegEx to only allow 5 alphabet characters exactly */
        value={guess}
        onChange={
          (event) => {
            setGuess(event.target.value);
          }
        }
      />
    </form>
  );
}

export default GuessInput;
