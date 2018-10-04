import React from 'react';

class Answer extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.getResponse(this.props.answer.correct);
  }

  render() {
    return (
        <li onClick={this.handleClick}>{this.props.answer.content}</li>
    );
  }
}

export default Answer;