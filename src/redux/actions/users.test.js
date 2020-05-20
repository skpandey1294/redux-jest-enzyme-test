import * as actions from './users'
import * as types from '../action-constant'

describe('actions', () => {

  test('it should return action request object', () => {
    const expectedAction = {
      type: types.FETCH_USERS_REQUEST
    }
    expect(actions.fetchUsersRequest()).toEqual(expectedAction)
  })

  test('it should return action success object', () => {
      const payload = "dummy data"
    const expectedAction = {
      type: types.FETCH_USERS_SUCCESS,
      payload
    }
    expect(actions.fetchUsersSuccess(payload)).toEqual(expectedAction)
  })

  test('it should return action error', () => {
    const payload = "error"
  const expectedAction = {
    type: types.FETCH_USERS_FAILURE,
    payload
  }
  expect(actions.fetchUsersFailure(payload)).toEqual(expectedAction)
})
})