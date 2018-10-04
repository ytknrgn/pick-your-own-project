import React from 'react';
import cx from 'classnames';

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

export default Answer;