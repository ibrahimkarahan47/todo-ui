import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header';

describe('App component', () => {
	let container

  	beforeEach(() => {
		  container = shallow(
		  	<App/>
		)
	})

  	it('should render a <div /> without crashing', () => {
		expect(container.find('div').length).toEqual(1);
  	});

  	it("should render the Timer Component", () => {
    	expect(container.containsMatchingElement(<Header />)).toEqual(true)
  	})
});
