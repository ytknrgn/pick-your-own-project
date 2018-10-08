import React from 'react';
import Answer from '../../src/components/Answer';
import {shallow} from 'enzyme';

describe('Answer', () => {
  test('Answer clicked', () => {
    const getResponse = jest.fn();
    const answer = {correct: true, content: 'test' };
    const wrapper = shallow(<Answer getResponse={getResponse} answer={answer}/>);
    wrapper.find('button').simulate('click');
    setTimeout(() => expect(getResponse).toHaveBeenCalled(), 1100);
    const answerState = wrapper.state('answered');
    expect(answerState).toEqual(true);
  });
});