import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Albums from './albums';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Albums />
    </Provider>
)


describe("Albums Component", () => {

    it("Albums should render without throwing an error", () => {
        expect(wrapped.debug()).toMatchSnapshot();
    });
    
});