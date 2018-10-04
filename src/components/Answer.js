import React from 'react';
import cx from 'classnames';

import '../styles/components/answer.scss';

class Answer extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    setTimeout(() => this.props.getResponse(this.props.answer.correct), 500);
  }

  render() {

    const classes = cx('answer', {
      'answer--green': this.props.answer.correct,
      'answer--red': !this.props.answer.correct
    });

    return (
        <button className={classes} onClick={this.handleClick}>{this.props.answer.content}</button>
    );
  }
}

export default Answer;