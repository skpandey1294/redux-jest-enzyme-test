import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../action-constant'
import fetchMock from 'fetch-mock'
import { baseUrl } from '../../config'
import { fetchUserPost } from './usersPost'
import { getAction } from '../../utils'
import axios from 'axios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async api call', () => {
  afterEach(() => {
    fetchMock.restore()
  })

     const resp = fetchMock.getOnce(`${baseUrl}/posts/1`, {
        headers: { 'content-type': 'application/json' }
      })

    const store = mockStore();
    store.dispatch(fetchUserPost(1));
      

//   it("creates FETCH_USERS_POST_REQUEST when fetching post has been done", async () => {
//     expect(await getAction(store, "FETCH_USERS_POST_REQUEST")).toEqual({type: types.FETCH_USERS_POST_REQUEST});
//   });

//   it("creates FETCH_USERS_POST_SUCCESS when fetching post has been done", async () => {
//     expect(await getAction(store, "FETCH_USERS_POST_SUCCESS")).toEqual({type: types.FETCH_USERS_POST_SUCCESS, payload: []});
//   });

//   it("creates FETCH_USERS_POST_FAILURE when fetching post has been done", async () => {
//     expect(await getAction(store, "FETCH_USERS_POST_FAILURE")).toEqual({type: types.FETCH_USERS_POST_FAILURE, payload: 'error'});
//   });

  it("creates FETCH_USERS_POST_FAILURE when fetching post has been done", async () => {

  });


});