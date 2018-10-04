import React from 'react';
import Answers from './Answers';

import '../styles/components/trivia.scss';

class Trivia extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    
    return (
      <div className='trivia__wrapper'>
        <div className='trivia'>
          <div className='trivia__category'>{this.props.trivia.category}</div>
          <div className='trivia__question'>{this.props.trivia.question}</div>
          <Answers correctAns={this.props.trivia.correct_answer} incorrectAns={this.props.trivia.incorrect_answers} getResponse={this.props.getResponse}/>
        </div>
      </div>
    );
  }
}

export default Trivia;