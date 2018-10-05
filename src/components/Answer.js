import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import '../../styles/components/answer.scss';

class Answer extends React.Component {
  
  constructor() {
    super();
    this.state = { answered: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    setTimeout(() => this.props.getResponse(this.props.answer.correct), 1000);
    this.setState({ answered: true });
  }
    
  render() {
    const classes = cx('answer', {
      'answer--green': this.state.answered && this.props.answer.correct,
      'answer--red': this.state.answered && !this.props.answer.correct
    });

    return (
      <button className={classes} onClick={this.handleClick}>{this.props.answer.content}</button>
    );
  }
}

Answer.propTypes = {
  getResponse: PropTypes.func.isRequired,
  answer: PropTypes.object.isRequired
};

export default Answer;