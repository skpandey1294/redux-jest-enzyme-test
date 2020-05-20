import React from 'react'
import Navbar from './navbar'
import { shallow } from 'enzyme'


const setUp = (props = {}) => {
    const component = shallow(<Navbar />)
    return component
}

const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`.${attr}`)
    return wrapper
}




describe('Testing the Navbar Component', () => {

    let component

    beforeEach(() => {
        component = setUp()
    })

    test('Navbar Test', () => { 
        // console.log(component.debug())
    })
    
    test('User button testing', () => {
        const wrapper = findByTestAttr(component, 'user-btn')
        expect(wrapper.length).toBe(1)
    })

    test('It should not fail', () => {
        const wrapper = findByTestAttr(component, 'user-btn')
        
        const element = findByTestAttr(wrapper, 'makeStyles-link-4')

        // console.log(element.debug())
        expect(element.length).toEqual(1)
    })
})
