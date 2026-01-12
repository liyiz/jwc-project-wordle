import React from 'react';

function GuessInput() {

  const [guess, setGuess] = React.useState('');

  function handleSubmit() {
    console.log({guess});
    // checkGuess
    setGuess(''); // clear input value after checking guess
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <label htmlFor="guess-input">{'Enter guess:'}</label>
      <input 
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}" /* RegEx to only allow 5 alphabet characters exactly */
        title="5 letter word"
        id="guess-input" 
        type="text" 
        value={guess}
        onChange={ (event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
