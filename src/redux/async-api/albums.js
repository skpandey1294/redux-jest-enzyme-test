import {
    fetchAlbumsRequest,
    fetchAlbumsSuccess,
    fetchAlbumsFailure,
  } from '../actions/albums.js'
  
  import axios from 'axios'
  
  
  import { baseUrl } from '../../config'
  
  export const fetchAlbums = () => {
      return (dispatch) => {
          dispatch(fetchAlbumsRequest())
          axios(`${baseUrl}/albums`)
          .then(response => {
              dispatch(fetchAlbumsSuccess(response.data))
          })
          .catch(error => {
              dispatch(fetchAlbumsFailure(error))
          })
      }
  }
  