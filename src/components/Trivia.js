import React from 'react';
import Answers from './Answers';

class Trivia extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    
    return (
      <div>
        <h2>{this.props.trivia.category}</h2>
        <h3>{this.props.trivia.question}</h3>
        <Answers correctAns={this.props.trivia.correct_answer} incorrectAns={this.props.trivia.incorrect_answers} getResponse={this.props.getResponse}/>
      </div>
    );
  }
}

export default Trivia;