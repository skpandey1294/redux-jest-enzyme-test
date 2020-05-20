import {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFailure,
  } from '../actions/users.js'
  
  import axios from 'axios'
  
  
  import { baseUrl } from '../../config'
  
  export const fetchUsers = () => {
      return (dispatch) => {
          dispatch(fetchUsersRequest())
          axios(`${baseUrl}/users`)
          .then(response => {
              dispatch(fetchUsersSuccess(response.data))
          })
          .catch(error => {
              dispatch(fetchUsersFailure(error))
          })
      }
  }
  