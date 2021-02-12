import React from 'react';
import { shallow } from 'enzyme';
import TodoForm from '../TodoForm';

describe('TodoForm component', () => {
	let container

  	beforeEach(() => {
		  container = shallow(
		  	<TodoForm/>
		)
	})

  	it('should render a <form /> without crashing', () => {
		expect(container.find('form').length).toEqual(1);
  	});

    it('should render <input/> and <buton/>', () => {
		expect(container.find('input').length).toEqual(1);
        expect(container.find("button").text()).toEqual("Add");
  	});
});