import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../action-constant'
import fetchMock from 'fetch-mock'
import { baseUrl } from '../../config'
import { fetchAlbumPhotos } from './albumPhotos'
import { getAction } from '../../utils'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async api call', () => {
  afterEach(() => {
    fetchMock.restore()
  })

      fetchMock.getOnce(`${baseUrl}/photos?albumId=1`, {
        headers: { 'content-type': 'application/json' }
      })
    const store = mockStore();
    store.dispatch(fetchAlbumPhotos(1));

      

  it("creates FETCH_ALBUM_POSTS_REQUEST when fetching post has been done", async () => {
    expect(await getAction(store, "FETCH_ALBUM_PHOTOS_REQUEST")).toEqual({type: types.FETCH_ALBUM_PHOTOS_REQUEST});
  });

//   it("creates FETCH_ALBUM_POSTS_SUCCESS when fetching post has been done", async () => {
//     expect(await getAction(store, "FETCH_ALBUM_PHOTOS_SUCCESS")).toEqual({type: types.FETCH_ALBUM_PHOTOS_SUCCESS, payload: []});
//   });

//   it("creates FETCH_ALBUM_POSTS_FAILURE when fetching post has been done", async () => {
//     expect(await getAction(store, "FETCH_ALBUM_PHOTOS_FAILURE")).toEqual({type: types.FETCH_ALBUM_PHOTOS_FAILURE, payload: 'error'});
//   });
});

