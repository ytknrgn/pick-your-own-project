import React from 'react';
import Answers from './Answers';
import PropTypes from 'prop-types';
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

Trivia.propTypes = {
  trivia: PropTypes.object.isRequired,
  getResponse: PropTypes.func.isRequired
};

export default Trivia;