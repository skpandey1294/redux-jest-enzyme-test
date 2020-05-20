import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../action-constant'
import fetchMock from 'fetch-mock'
import { baseUrl } from '../../config'
import { fetchUsers } from './users'
import { getAction } from '../../utils'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async api call', () => {
  afterEach(() => {
    fetchMock.restore()
  })

      fetchMock.getOnce(`${baseUrl}/users`, {
        headers: { 'content-type': 'application/json' }
      })



    const store = mockStore();
    store.dispatch(fetchUsers());
      

//   it("creates FETCH_USERS_REQUEST when fetching post has been done", async () => {
//     expect(await getAction(store, "FETCH_USERS_REQUEST")).toEqual({type: types.FETCH_USERS_REQUEST});
//   });

//   it("creates FETCH_USERS_SUCCESS when fetching post has been done", async () => {
//     expect(await getAction(store, "FETCH_USERS_SUCCESS")).toEqual({type: types.FETCH_USERS_SUCCESS, payload: []});
//   });

//   it("creates FETCH_USERS_FAILURE when fetching post has been done", async () => {
//     expect(await getAction(store, "FETCH_USERS_FAILURE")).toEqual({type: types.FETCH_USERS_FAILURE, payload: 'error'});
//   });

  it("creates FETCH_USERS_FAILURE when fetching post has been done", async () => {
     });
});

