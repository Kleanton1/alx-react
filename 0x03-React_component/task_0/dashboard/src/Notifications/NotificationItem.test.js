import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';


// shallow render NotificationItem component
describe('<NotificationItem />', () => {
	it('Tests that NotificationItem renders without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Passes dumby `type` prop and checks for correct html', () => {
		const wrapper = shallow(<NotificationItem type="default" />);
		expect(wrapper.html()).toContain('default');
	})

	it('Passes dumby `value` prop and checks for correct html', () => {
		const wrapper = shallow(<NotificationItem value="This is a success notification" />);
		expect(wrapper.find('li').text()).toBe('Successful  notification');
	})

	it('Passes dumby `html` prop and checks for correct html', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHtml' }} />);
		expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
	})
})