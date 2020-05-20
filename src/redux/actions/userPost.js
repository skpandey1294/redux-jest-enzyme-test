import {
    FETCH_USERS_POST_REQUEST,
    FETCH_USERS_POST_SUCCESS,
    FETCH_USERS_POST_FAILURE,
    FETCH_USERS_COMMENT_REQUEST,
    FETCH_USERS_COMMENT_SUCCESS,
    FETCH_USERS_COMMENT_FAILURE,
  } from '../action-constant/index'
  
  export const fetchUsersPostRequest = () => {
    return {
      type: FETCH_USERS_POST_REQUEST
    }
  }
  
  export const fetchUsersPostSuccess = post => {
    return {
      type: FETCH_USERS_POST_SUCCESS,
      payload: post
    }
  }
  
  export const fetchUsersPostFailure = error => {
    return {
      type: FETCH_USERS_POST_FAILURE,
      payload: error
    }
  }

  export const fetchUsersCommentRequest = () => {
    return {
      type: FETCH_USERS_COMMENT_REQUEST
    }
  }
  
  export const fetchUsersCommentSuccess = comment => {
    return {
      type: FETCH_USERS_COMMENT_SUCCESS,
      payload: comment
    }
  }
  
  export const fetchUsersCommentFailure = error => {
    return {
      type: FETCH_USERS_COMMENT_FAILURE,
      payload: error
    }
  }