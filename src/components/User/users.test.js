import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Users from './users';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Users />
    </Provider>
)


describe("Users Component", () => {

    it("Users should render without throwing an error", () => {
        expect(wrapped.debug()).toMatchSnapshot();
    });
    
});