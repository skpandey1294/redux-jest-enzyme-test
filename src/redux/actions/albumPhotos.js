import {
    FETCH_ALBUM_PHOTOS_REQUEST,
    FETCH_ALBUM_PHOTOS_SUCCESS,
    FETCH_ALBUM_PHOTOS_FAILURE
  } from '../action-constant/index'
  
  export const fetchAlbumPhotosRequest = () => {
    return {
      type: FETCH_ALBUM_PHOTOS_REQUEST
    }
  }
  
  export const fetchAlbumPhotosSuccess = pictures => {
    return {
      type: FETCH_ALBUM_PHOTOS_SUCCESS,
      payload: pictures
    }
  }
  
  export const fetchAlbumPhotosFailure = error => {
    return {
      type: FETCH_ALBUM_PHOTOS_FAILURE,
      payload: error
    }
  }
  