import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
} from '../actions/posts.js'

import axios from 'axios'

import { baseUrl } from '../../config'

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest())
        axios(`${baseUrl}/posts`)
        .then(response => {
            dispatch(fetchPostsSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchPostsFailure(error))
        })
    }
}
