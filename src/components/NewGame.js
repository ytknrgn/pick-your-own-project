import React from 'react';
import Difficulty from './Difficulty';
import PropTypes from 'prop-types';
import '../../styles/components/new-game.scss';

function NewGame({ getDifficulty }) {

  return (
    <div className='new-game'>
      <div className='new-game__title'>Who Knows?</div>
      <div className='new-game__subtitle'>A trivia game that you will probably end up playing while in the bathroom.</div>
      <div className='new-game__choose'>Choose difficulty:</div>
      <div className='new-game__buttons'>
        {['easy','medium','hard'].map(item => <Difficulty key={item} dif={item} getDifficulty={getDifficulty}/>)}
      </div>
    </div>
  );
}

NewGame.propTypes = {
  getDifficulty: PropTypes.func.isRequired
};

export default NewGame;