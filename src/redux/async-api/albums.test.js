import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../action-constant'
import fetchMock from 'fetch-mock'
import { baseUrl } from '../../config'
import { fetchAlbums } from './albums'
import { getAction } from '../../utils'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async api call', () => {
  afterEach(() => {
    fetchMock.restore()
  })

     const resp = fetchMock.getOnce(`${baseUrl}/albums`, {
        headers: { 'content-type': 'application/json' }
      })

      const store = mockStore();
      store.dispatch(fetchAlbums());
      

  it("creates FETCH_ALBUMS_REQUEST when fetching post has been done", async () => {
    expect(await getAction(store, "FETCH_ALBUMS_REQUEST")).toEqual({type: types.FETCH_ALBUMS_REQUEST});
  });

//   it("creates FETCH_ALBUMS_SUCCESS when fetching post has been done", async () => {
//     expect(await getAction(store, "FETCH_ALBUMS_SUCCESS")).toEqual({type: types.FETCH_ALBUMS_SUCCESS, payload: []});
//   });

//   it("creates FETCH_ALBUMS_FAILURE when fetching post has been done", async () => {
//     expect(await getAction(store, "FETCH_ALBUMS_FAILURE")).toEqual({type: types.FETCH_ALBUMS_FAILURE, payload: 'error'});
//   });
});