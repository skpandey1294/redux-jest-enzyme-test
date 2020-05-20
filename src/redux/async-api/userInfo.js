import {
    fetchUserInfoRequest,
    fetchUserInfoSuccess,
    fetchUserInfoFailure,
  } from '../actions/userInfo.js'
  
  import axios from 'axios'
  
  
  import { baseUrl } from '../../config'
  
  export const fetchUserInfo = (userId) => {
      return (dispatch) => {
          dispatch(fetchUserInfoRequest(userId))
          axios(`${baseUrl}/users/${userId}`)
          .then(response => {
              dispatch(fetchUserInfoSuccess(response.data))
          })
          .catch(error => {
              dispatch(fetchUserInfoFailure(error))
          })
      }
  }