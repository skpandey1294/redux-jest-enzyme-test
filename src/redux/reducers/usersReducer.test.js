import * as types from  '../action-constant'
import userReducer from './usersReducer'

describe('users reducer', () => {
    const initialState = {
        loading: false,
        users: [],
        error: ''
    }


  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_USERS_REQUEST', () => {
    expect(
      userReducer({}, {
        type: types.FETCH_USERS_REQUEST
      })
    ).toEqual({
        loading: true
    })
})


   it('should handle FETCH_USERS_SUCCESS', () => {
    expect(
      userReducer(initialState,
        {
          type: types.FETCH_USERS_SUCCESS,
          payload: [1,2,3,4,5]
        }
      )
    ).toEqual({
        loading: false,
        users: [1,2,3,4,5],
        error: ''
    })

})

it('should handle FETCH_USERS_FAILURE', () => {
    expect(
        userReducer(initialState,
          {
            type: types.FETCH_USERS_FAILURE,
            payload: "error"
          }
        )
      ).toEqual({
          loading: false,
          users: [],
          error: 'error'
      })

  })
})