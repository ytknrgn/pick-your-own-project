import React from 'react';
import Answer from './Answer';
import PropTypes from 'prop-types';
import '../../styles/components/answers.scss';

class Answers extends React.Component {

  constructor() {
    super();
  }

  shouldComponentUpdate(nextProps,nextState) {
    return (nextProps.correctAns !== this.props.correctAns) 
  }

  shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  }

  render() {

    let answers = this.props.incorrectAns
    .map(ans => ({content: ans, correct: false}))
    .concat([{content: this.props.correctAns, correct: true}]);

    answers = this.shuffleArray(answers);
    console.log(answers);
  
    return (
        <div className='answers'>
          {answers.map(answer => <Answer key={answer.content} answer={answer} getResponse={this.props.getResponse}/>)}
        </div>
    );
  }
}

Answers.propTypes = {
  incorrectAns: PropTypes.array.isRequired,
  correctAns: PropTypes.string.isRequired,
  getResponse: PropTypes.func.isRequired
};

export default Answers;