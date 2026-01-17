import React from 'react';

function happy(tries) {
  return (  
    <p>
      <strong>{'Congratulations!'}</strong> {'Got it in'} <strong>{` ${tries} guesses`}</strong>.
    </p>
  )
}

function sad(answer) {
  return <p>{'Sorry, the correct answer is '}<strong>{answer}</strong>{'.'}</p>
}

function GameoverBanner({ status, answer, tries }) {
  let className;
  let content;
  if (status === 'won') {
    className = 'happy banner';
    content = happy(tries);
  } else if (status === 'lost') {
    className = 'sad banner';
    content = sad(answer);
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
}

export default GameoverBanner;