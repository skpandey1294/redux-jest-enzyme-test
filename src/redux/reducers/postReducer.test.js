import * as types from  '../action-constant'
import postReducer from './postReducer'

describe('post reducer', () => {
    const initialState = {
        loading: false,
        posts: [],
        error: ''
    }


  it('should return the initial state', () => {
    expect(postReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_POSTS_REQUEST', () => {
    expect(
      postReducer({}, {
        type: types.FETCH_POSTS_REQUEST
      })
    ).toEqual({
        loading: true
    })
})


   it('should handle FETCH_POSTS_SUCCESS', () => {
    expect(
      postReducer(initialState,
        {
          type: types.FETCH_POSTS_SUCCESS,
          payload: [1,2,3,4,5]
        }
      )
    ).toEqual({
        loading: false,
        posts: [1,2,3,4,5],
        error: ''
    })

})

it('should handle FETCH_POSTS_FAILURE', () => {
    expect(
        postReducer(initialState,
          {
            type: types.FETCH_POSTS_FAILURE,
            payload: "error"
          }
        )
      ).toEqual({
          loading: false,
          posts: [],
          error: 'error'
      })

  })
})