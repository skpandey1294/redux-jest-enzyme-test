import {
    FETCH_USERS_COMMENT_REQUEST,
    FETCH_USERS_COMMENT_SUCCESS,
    FETCH_USERS_COMMENT_FAILURE,
  } from '../action-constant';

  const initialState = {
    loading: false,
    usersComment: [],
    error: ''
}


const usersCommentReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case FETCH_USERS_COMMENT_REQUEST:
            return {
                ...state,
                loading: true
            }
    
        case FETCH_USERS_COMMENT_SUCCESS:
            return {
                loading: false,
                usersComment: action.payload,
                error: ''
            }
    
        case FETCH_USERS_COMMENT_FAILURE:
            return {
                loading: false,
                usersComment: [],
                error: action.payload
            }    

        default : return state

    }
}

export default usersCommentReducer