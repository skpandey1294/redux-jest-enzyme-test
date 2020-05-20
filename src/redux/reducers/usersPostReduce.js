import {
  FETCH_USERS_POST_REQUEST,
  FETCH_USERS_POST_SUCCESS,
  FETCH_USERS_POST_FAILURE
} from '../action-constant';

const initialState = {
    loading: false,
    userPost: [],
    error: ''
}


const usersPostReducer = (state = initialState, action) => {
    switch(action.type) {

        case FETCH_USERS_POST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_POST_SUCCESS:
            return {
                loading: false,
                userPost: action.payload,
                error: ''
            }

        case FETCH_USERS_POST_FAILURE:
            return {
                loading: false,
                userPost: [],
                error: action.payload
            }

        default : return state
    }
}

export default usersPostReducer