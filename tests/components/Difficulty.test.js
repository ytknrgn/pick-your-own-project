import React from 'react';
import Difficulty from '../../src/components/Difficulty';
import {shallow} from 'enzyme';

describe('Difficulty', () => {
  test('Difficulty clicked', () => {
    const getDifficulty = jest.fn();
    const dif = 'easy';
    const wrapper = shallow(<Difficulty getDifficulty={getDifficulty} dif={dif}/>);
    wrapper.find('button').simulate('click');
    expect(getDifficulty).toHaveBeenCalledWith(dif);
  });
});