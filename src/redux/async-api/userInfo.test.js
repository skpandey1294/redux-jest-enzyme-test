import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../action-constant'
import fetchMock from 'fetch-mock'
import { baseUrl } from '../../config'
import { fetchUserInfo } from './userInfo'
import { getAction } from '../../utils'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async api call', () => {
  afterEach(() => {
    fetchMock.restore()
  })

     const resp = fetchMock.getOnce(`${baseUrl}/users/1`, {
        headers: { 'content-type': 'application/json' }
      })


    const store = mockStore();
    store.dispatch(fetchUserInfo(1));

      

  it("creates FETCH_USERS_INFO_REQUEST when fetching post has been done", async () => {
    expect(await getAction(store, "FETCH_USERS_INFO_REQUEST")).toEqual({type: types.FETCH_USERS_INFO_REQUEST});
  });

//   it("creates FETCH_USERS_INFO_SUCCESS when fetching post has been done", async () => {
//     expect(await getAction(store, "FETCH_USERS_INFO_SUCCESS")).toEqual({type: types.FETCH_USERS_INFO_SUCCESS, payload: []});
//   });

//   it("creates FETCH_USERS_INFO_FAILURE when fetching post has been done", async () => {
//     expect(await getAction(store, "FETCH_USERS_INFO_FAILURE")).toEqual({type: types.FETCH_USERS_INFO_FAILURE, payload: 'error'});
//   });
});

