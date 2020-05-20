import {
    fetchAlbumPhotosRequest,
    fetchAlbumPhotosSuccess,
    fetchAlbumPhotosFailure,
  } from '../actions/albumPhotos.js'
  
  import axios from 'axios'
  
  
  import { baseUrl } from '../../config'
  
  export const fetchAlbumPhotos = (albumId) => {
      return (dispatch) => {
          dispatch(fetchAlbumPhotosRequest())
          axios(`${baseUrl}/photos?albumId=${albumId}`)
          .then(response => {
              dispatch(fetchAlbumPhotosSuccess(response.data))
          })
          .catch(error => {
              dispatch(fetchAlbumPhotosFailure(error))
          })
      }
  }
  