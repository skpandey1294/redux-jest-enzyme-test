import React from 'react'
import Posts from './posts'
import { shallow, mount } from 'enzyme'
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux'


const mockStore = configureMockStore();
const store = mockStore({});

describe('Testing the Posts Component', () => {

    it('Posts file', () => {

        
        const wrapper = shallow(<Provider store={store}>
            <Posts />
        </Provider>

        )

        expect(wrapper).toMatchSnapshot()

        // console.log(wrapper.dive().find(''))

        // const element = wrapper.find('Posts')

        // console.log(wrapper.debug())
    })
})