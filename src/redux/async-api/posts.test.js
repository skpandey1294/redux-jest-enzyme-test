import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../action-constant'
import fetchMock from 'fetch-mock'
import { baseUrl } from '../../config'
import { fetchPosts } from './posts.js'
import { getAction } from '../../utils'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async api call', () => {
  afterEach(() => {
    fetchMock.restore()
  })

     fetchMock.getOnce(`${baseUrl}/posts`, {
        headers: { 'content-type': 'application/json' }
      })

      const store = mockStore();
      store.dispatch(fetchPosts());

  it("creates FETCH_POSTS_REQUEST when fetching post has been done", async () => {
    expect(await getAction(store, "FETCH_POSTS_REQUEST")).toEqual({type: types.FETCH_POSTS_REQUEST});
  });

  // it("creates FETCH_POSTS_SUCCESS when fetching post has been done", async () => {
  //     expect(await getAction(store, "FETCH_POSTS_SUCCESS")).toEqual({type: types.FETCH_POSTS_SUCCESS, payload: []});
  //   });

  // it("creates FETCH_POSTS_FAILURE when fetching post has been done", async () => {
  //     expect(await getAction(store, "FETCH_POSTS_FAILURE")).toEqual({type: types.FETCH_POSTS_FAILURE});
  //   });
});

