import React from 'react';

function GuessInput({ handleSubmit }) {

  const [tentativeGuess, setTentativeGuess] = React.useState('');

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(tentativeGuess);
        setTentativeGuess(''); // clear input value after checking guess
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
        value={tentativeGuess}
        onChange={ (event) => {
          const nextTentativeGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextTentativeGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
