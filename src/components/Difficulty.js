import React from 'react';
import PropTypes from 'prop-types';

function Difficulty({ dif, getDifficulty }) {

  return (
    <button className='new-game__button' onClick={event => getDifficulty(dif)}>{dif}</button>
  );
}

Difficulty.propTypes = {
  dif: PropTypes.string.isRequired,
  getDifficulty: PropTypes.func.isRequired
};


export default Difficulty;