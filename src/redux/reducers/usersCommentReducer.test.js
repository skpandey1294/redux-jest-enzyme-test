import * as types from  '../action-constant'
import usersCommentReducer from './usersCommentReducer'

describe('users comment reducer', () => {
    const initialState = {
        loading: false,
        usersComment: [],
        error: ''
    }


  it('should return the initial state', () => {
    expect(usersCommentReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_USERS_COMMENT_REQUEST', () => {
    expect(
      usersCommentReducer({}, {
        type: types.FETCH_USERS_COMMENT_REQUEST
      })
    ).toEqual({
        loading: true
    })
})


   it('should handle FETCH_USERS_COMMENT_SUCCESS', () => {
    expect(
      usersCommentReducer(initialState,
        {
          type: types.FETCH_USERS_COMMENT_SUCCESS,
          payload: [1,2,3,4,5]
        }
      )
    ).toEqual({
        loading: false,
        usersComment: [1,2,3,4,5],
        error: ''
    })

})

it('should handle FETCH_USERS_COMMENT_FAILURE', () => {
    expect(
        usersCommentReducer(initialState,
          {
            type: types.FETCH_USERS_COMMENT_FAILURE,
            payload: "error"
          }
        )
      ).toEqual({
          loading: false,
          usersComment: [],
          error: 'error'
      })

  })
})