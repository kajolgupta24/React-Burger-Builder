import React from 'react'
import {configure , shallow} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure ({adapter : new adapter ()})

describe('<NavigationItems/>' , () => {
    let wrapper ;
    beforeEach( () => {
        wrapper = shallow(<NavigationItems/>);
    })

    it('should only render two navigation items if not authenticated' , () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three navigation items if authenticated' , () => {
        wrapper.setProps({ isAuthenticated : true })
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });


    it('should an exact logout ' , () => {
        wrapper.setProps({ isAuthenticated : true })
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true)
    });
});
