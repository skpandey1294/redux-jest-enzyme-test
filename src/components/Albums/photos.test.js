import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Photos from './photos';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Photos />
    </Provider>
)


describe("Photos Component", () => {

    it("Photos should render without throwing an error", () => {
        expect(wrapped.debug()).toMatchSnapshot();
    });

});