import React from 'react';
import Answer from '../../src/components/App';
import {shallow} from 'enzyme';

describe('Answer', () => {
  test('Easy button clicked', () => {
    const getResponse = jest.fn();
    const answer = 
    const wrapper = shallow(<Answer getResponse={getResponse} answer={answer}/>);
    wrapper.find('.new-game__button').simulate('click');
    const level = wrapper.state('level');
    expect(level).toEqual(1);
  });
});
