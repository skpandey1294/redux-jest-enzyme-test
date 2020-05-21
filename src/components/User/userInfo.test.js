import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import UserInfo from './userInfo';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <UserInfo />
    </Provider>
)


describe("UserInfo Component", () => {

    it("UserInfo should render without throwing an error", () => {
        expect(wrapped.debug()).toMatchSnapshot();
    });
    
});