import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import UserPost from './userPost';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <UserPost />
    </Provider>
)


describe("UserPost Component", () => {

    it("UserPost should render without throwing an error", () => {
        expect(wrapped.debug()).toMatchSnapshot();
    });
});