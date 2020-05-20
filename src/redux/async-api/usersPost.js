import {
    fetchUsersPostRequest,
    fetchUsersPostSuccess,
    fetchUsersPostFailure,
    fetchUsersCommentRequest,
    fetchUsersCommentSuccess,
    fetchUsersCommentFailure
  } from '../actions/userPost.js'
  
  import axios from 'axios'
  
  
  import { baseUrl } from '../../config'
  
  export const fetchUserPost = (postId) => {
      return (dispatch) => {
          dispatch(fetchUsersPostRequest())
          axios(`${baseUrl}/posts/${postId}`)
          .then(response => {
              dispatch(fetchUsersPostSuccess(response.data))
          })
          .catch(error => {
              dispatch(fetchUsersPostFailure(error))
          })
      }
  }

  export const fetchUserComment = (postId) => {
    return (dispatch) => {
        dispatch(fetchUsersCommentRequest())
        axios(`${baseUrl}/posts/${postId}/comments`)
        .then(response => {
            dispatch(fetchUsersCommentSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchUsersCommentFailure(error))
        })
    }
}

