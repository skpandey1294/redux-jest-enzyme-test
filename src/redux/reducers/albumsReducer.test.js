import * as types from  '../action-constant'
import albumsReducer from './albumsReducer'

describe('albums reducer', () => {
    const initialState = {
        loading: false,
        albums: [],
        error: ''
    }


  it('should return the initial state', () => {
    expect(albumsReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_ALBUMS_REQUEST', () => {
    expect(
      albumsReducer({}, {
        type: types.FETCH_ALBUMS_REQUEST
      })
    ).toEqual({
        loading: true
    })
})


   it('should handle FETCH_ALBUMS_SUCCESS', () => {
    expect(
      albumsReducer(initialState,
        {
          type: types.FETCH_ALBUMS_SUCCESS,
          payload: [1,2,3,4,5]
        }
      )
    ).toEqual({
        loading: false,
        albums: [1,2,3,4,5],
        error: ''
    })

})

it('should handle FETCH_ALBUMS_FAILURE', () => {
    expect(
        albumsReducer(initialState,
          {
            type: types.FETCH_ALBUMS_FAILURE,
            payload: "error"
          }
        )
      ).toEqual({
          loading: false,
          albums: [],
          error: 'error'
      })

  })
})