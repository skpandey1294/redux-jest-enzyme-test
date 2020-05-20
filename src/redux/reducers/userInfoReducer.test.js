import * as types from  '../action-constant'
import userInfoReducer from './userInfoReducer'

describe('user info reducer', () => {
    const initialState = {
        loading: false,
        userDetails: {},
        error: ''
    }


  it('should return the initial state', () => {
    expect(userInfoReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_USERS_INFO_REQUEST', () => {
    expect(
      userInfoReducer({}, {
        type: types.FETCH_USERS_INFO_REQUEST
      })
    ).toEqual({
        loading: true
    })
})


   it('should handle FETCH_USERS_INFO_SUCCESS', () => {
       const userInfo = {userId: 1, username: 'Sumit'}
    expect(
      userInfoReducer(initialState,
        {
          type: types.FETCH_USERS_INFO_SUCCESS,
          payload: userInfo
        }
      )
    ).toEqual({
        loading: false,
        userDetails: userInfo,
        error: ''
    })

})

it('should handle FETCH_USERS_INFO_FAILURE', () => {
    expect(
        userInfoReducer(initialState,
          {
            type: types.FETCH_USERS_INFO_FAILURE,
            payload: "error"
          }
        )
      ).toEqual({
          loading: false,
          userDetails: {},
          error: 'error'
      })

  })
})