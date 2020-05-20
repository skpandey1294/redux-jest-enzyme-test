import * as actions from './albumPhotos'
import * as types from '../action-constant'

describe('actions', () => {

  test('it should return action request object', () => {
    const expectedAction = {
      type: types.FETCH_ALBUM_PHOTOS_REQUEST
    }
    expect(actions.fetchAlbumPhotosRequest()).toEqual(expectedAction)
  })

  test('it should return action success object', () => {
      const payload = "dummy data"
    const expectedAction = {
      type: types.FETCH_ALBUM_PHOTOS_SUCCESS,
      payload
    }
    expect(actions.fetchAlbumPhotosSuccess(payload)).toEqual(expectedAction)
  })

  test('it should return action error', () => {
    const payload = "error"
  const expectedAction = {
    type: types.FETCH_ALBUM_PHOTOS_FAILURE,
    payload
  }
  expect(actions.fetchAlbumPhotosFailure(payload)).toEqual(expectedAction)
})
})