import * as actions from './albums'
import * as types from '../action-constant'

describe('actions', () => {

  test('it should return action request object', () => {
    const expectedAction = {
      type: types.FETCH_ALBUMS_REQUEST
    }
    expect(actions.fetchAlbumsRequest()).toEqual(expectedAction)
  })

  test('it should return action success object', () => {
      const payload = "dummy data"
    const expectedAction = {
      type: types.FETCH_ALBUMS_SUCCESS,
      payload
    }
    expect(actions.fetchAlbumsSuccess(payload)).toEqual(expectedAction)
  })

  test('it should return action error', () => {
    const payload = "error"
  const expectedAction = {
    type: types.FETCH_ALBUMS_FAILURE,
    payload
  }
  expect(actions.fetchAlbumsFailure(payload)).toEqual(expectedAction)
})
})