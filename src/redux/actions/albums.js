import {
    FETCH_ALBUMS_REQUEST,
    FETCH_ALBUMS_SUCCESS,
    FETCH_ALBUMS_FAILURE
  } from '../action-constant/index'
  
  export const fetchAlbumsRequest = () => {
    return {
      type: FETCH_ALBUMS_REQUEST
    }
  }
  
  export const fetchAlbumsSuccess = albums => {
    return {
      type: FETCH_ALBUMS_SUCCESS,
      payload: albums
    }
  }
  
  export const fetchAlbumsFailure = error => {
    return {
      type: FETCH_ALBUMS_FAILURE,
      payload: error
    }
  }
  