import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import '../styles/components/answer.scss';

function Answer({ getResponse, answer }) {

    const classes = cx('answer', {
      'answer--green': answer.correct,
      'answer--red': !answer.correct
    });

    return (
        <button className={classes} onClick={()=>setTimeout(() => getResponse(answer.correct), 500)}>{answer.content}</button>
    );
}

Answer.propTypes = {
  getResponse: PropTypes.func.isRequired,
  answer: PropTypes.object.isRequired
};

export default Answer;