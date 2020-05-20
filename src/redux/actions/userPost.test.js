import * as actions from './userPost'
import * as types from '../action-constant'

describe('actions', () => {

  test('it should return action request object', () => {
    const expectedAction = {
      type: types.FETCH_USERS_POST_REQUEST
    }
    expect(actions.fetchUsersPostRequest()).toEqual(expectedAction)
  })

  test('it should return action success object', () => {
      const payload = "dummy data"
    const expectedAction = {
      type: types.FETCH_USERS_POST_SUCCESS,
      payload
    }
    expect(actions.fetchUsersPostSuccess(payload)).toEqual(expectedAction)
  })

  test('it should return action error', () => {
    const payload = "error"
  const expectedAction = {
    type: types.FETCH_USERS_POST_FAILURE,
    payload
  }
  expect(actions.fetchUsersPostFailure(payload)).toEqual(expectedAction)
})

test('it should return action request object', () => {
    const expectedAction = {
      type: types.FETCH_USERS_COMMENT_REQUEST
    }
    expect(actions.fetchUsersCommentRequest()).toEqual(expectedAction)
  })

  test('it should return action success object', () => {
      const payload = "dummy data"
    const expectedAction = {
      type: types.FETCH_USERS_COMMENT_SUCCESS,
      payload
    }
    expect(actions.fetchUsersCommentSuccess(payload)).toEqual(expectedAction)
  })

  test('it should return action error', () => {
    const payload = "error"
  const expectedAction = {
    type: types.FETCH_USERS_COMMENT_FAILURE,
    payload
  }
  expect(actions.fetchUsersCommentFailure(payload)).toEqual(expectedAction)
})
})