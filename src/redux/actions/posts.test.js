import * as actions from './posts'
import * as types from '../action-constant'

describe('actions', () => {

  test('it should return action request object', () => {
    const expectedAction = {
      type: types.FETCH_POSTS_REQUEST
    }
    expect(actions.fetchPostsRequest()).toEqual(expectedAction)
  })

  test('it should return action success object', () => {
      const payload = "dummy data"
    const expectedAction = {
      type: types.FETCH_POSTS_SUCCESS,
      payload
    }
    expect(actions.fetchPostsSuccess(payload)).toEqual(expectedAction)
  })

  test('it should return action error', () => {
    const payload = "error"
  const expectedAction = {
    type: types.FETCH_POSTS_FAILURE,
    payload
  }
  expect(actions.fetchPostsFailure(payload)).toEqual(expectedAction)
})
})