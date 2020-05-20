import {
    FETCH_USERS_INFO_REQUEST,
    FETCH_USERS_INFO_SUCCESS,
    FETCH_USERS_INFO_FAILURE } from '../action-constant/index.js'

   const initialState = {
       loading: false,
       userDetails: {},
       error: ''
   }

    const userInfoReducer = (state = initialState, action) => {

        switch(action.type) {

            case FETCH_USERS_INFO_REQUEST: 
            return {
                ...state,
                loading: true
            }

            case FETCH_USERS_INFO_SUCCESS: 
            return {
                loading: false,
                userDetails: action.payload,
                error: ''
            }

            case FETCH_USERS_INFO_FAILURE: 
            return {
                loading: false,
                userDetails: {},
                error: action.payload    
            }

            default: return state
        }
    }

    export default userInfoReducer