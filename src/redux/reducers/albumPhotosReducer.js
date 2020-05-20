import {
    FETCH_ALBUM_PHOTOS_REQUEST,
    FETCH_ALBUM_PHOTOS_SUCCESS,
    FETCH_ALBUM_PHOTOS_FAILURE } from '../action-constant/index.js'

   let initialState = {
       loading: false,
       photos: [],
       error: ''
   }

    const albumPhotosReducer = (state = initialState, action) => {

        switch(action.type) {

            case FETCH_ALBUM_PHOTOS_REQUEST: 
            return {
                ...state,
                loading: true
            }

            case FETCH_ALBUM_PHOTOS_SUCCESS: 
            return {
                loading: false,
                photos: action.payload,
                error: ''
            }

            case FETCH_ALBUM_PHOTOS_FAILURE: 
            return {
                loading: false,
                photos: [],
                error: action.payload    
            }

            default: return state
        }
    }

    export default albumPhotosReducer