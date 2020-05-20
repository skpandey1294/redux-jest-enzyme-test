import * as actions from './userInfo'
import * as types from '../action-constant'

describe('actions', () => {

  test('it should return action request object', () => {
    const expectedAction = {
      type: types.FETCH_USERS_INFO_REQUEST
    }
    expect(actions.fetchUserInfoRequest()).toEqual(expectedAction)
  })

  test('it should return action success object', () => {
      const payload = "dummy data"
    const expectedAction = {
      type: types.FETCH_USERS_INFO_SUCCESS,
      payload
    }
    expect(actions.fetchUserInfoSuccess(payload)).toEqual(expectedAction)
  })

  test('it should return action error', () => {
    const payload = "error"
  const expectedAction = {
    type: types.FETCH_USERS_INFO_FAILURE,
    payload
  }
  expect(actions.fetchUserInfoFailure(payload)).toEqual(expectedAction)
})
})