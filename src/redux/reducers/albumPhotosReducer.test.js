import * as types from  '../action-constant'
import albumPhotosReducer from './albumPhotosReducer'

describe('albums photos reducer', () => {
    const initialState = {
        loading: false,
        photos: [],
        error: ''
    }


  it('should return the initial state', () => {
    expect(albumPhotosReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_ALBUM_PHOTOS_REQUEST', () => {
    expect(
      albumPhotosReducer({}, {
        type: types.FETCH_ALBUM_PHOTOS_REQUEST
      })
    ).toEqual({
        loading: true
    })
})


   it('should handle FETCH_ALBUM_PHOTOS_SUCCESS', () => {
    expect(
      albumPhotosReducer(initialState,
        {
          type: types.FETCH_ALBUM_PHOTOS_SUCCESS,
          payload: [1,2,3,4,5]
        }
      )
    ).toEqual({
        loading: false,
        photos: [1,2,3,4,5],
        error: ''
    })

})

it('should handle FETCH_ALBUM_PHOTOS_FAILURE', () => {
    expect(
        albumPhotosReducer(initialState,
          {
            type: types.FETCH_ALBUM_PHOTOS_FAILURE,
            payload: "error"
          }
        )
      ).toEqual({
          loading: false,
          photos: [],
          error: 'error'
      })

  })
})