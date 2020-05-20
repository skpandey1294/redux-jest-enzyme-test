import {
    FETCH_USERS_INFO_REQUEST,
    FETCH_USERS_INFO_SUCCESS,
    FETCH_USERS_INFO_FAILURE
  } from '../action-constant/index'
  
  export const fetchUserInfoRequest = () => {
    return {
      type: FETCH_USERS_INFO_REQUEST
    }
  }
  
  export const fetchUserInfoSuccess = userInfo => {
    return {
      type: FETCH_USERS_INFO_SUCCESS,
      payload: userInfo
    }
  }
  
  export const fetchUserInfoFailure = error => {
    return {
      type: FETCH_USERS_INFO_FAILURE,
      payload: error
    }
  }
  