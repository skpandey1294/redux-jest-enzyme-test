import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Posts from './posts';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Posts />
    </Provider>
)


describe("Posts Component", () => {

    it("Posts should render without throwing an error", () => {
        expect(wrapped.debug()).toMatchSnapshot();
    });
});