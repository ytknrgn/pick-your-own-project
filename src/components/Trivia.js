import React from 'react';
import Answers from './Answers';

import '../styles/components/trivia.scss';

function Trivia({ trivia, getResponse }) {
  
  return (
    <div className='trivia__wrapper'>
      <div className='trivia'>
        <div className='trivia__category'>{trivia.category}</div>
        <div className='trivia__question'>{trivia.question}</div>
        <Answers correctAns={trivia.correct_answer} incorrectAns={trivia.incorrect_answers} getResponse={getResponse}/>
      </div>
    </div>
  );
}

export default Trivia;