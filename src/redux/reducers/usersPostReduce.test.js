import * as types from  '../action-constant'
import usersPostReducer from './usersPostReduce'

describe('users post reducer', () => {
    const initialState = {
        loading: false,
        userPost: [],
        error: ''
    }


  it('should return the initial state', () => {
    expect(usersPostReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_USERS_POST_REQUEST', () => {
    expect(
      usersPostReducer({}, {
        type: types.FETCH_USERS_POST_REQUEST
      })
    ).toEqual({
        loading: true
    })
})


   it('should handle FETCH_USERS_POST_SUCCESS', () => {
    expect(
      usersPostReducer(initialState,
        {
          type: types.FETCH_USERS_POST_SUCCESS,
          payload: [1,2,3,4,5]
        }
      )
    ).toEqual({
        loading: false,
        userPost: [1,2,3,4,5],
        error: ''
    })

})

it('should handle FETCH_USERS_POST_FAILURE', () => {
    expect(
        usersPostReducer(initialState,
          {
            type: types.FETCH_USERS_POST_FAILURE,
            payload: "error"
          }
        )
      ).toEqual({
          loading: false,
          userPost: [],
          error: 'error'
      })

  })
})