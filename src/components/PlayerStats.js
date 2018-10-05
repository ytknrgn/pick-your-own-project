import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/player-stats.scss';

function PlayerStats({ score, level, lives }) {

  return (
    <div className='stats'>
      <div className='stats__score'>Score: {score}</div>
      <div className='stats__level'>Level: {level}</div>
      <div className='stats__lives'>Lives: {lives}</div>
    </div>
  );
}

PlayerStats.propTypes = {
  score: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  lives: PropTypes.number.isRequired
};

export default PlayerStats;