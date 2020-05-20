import { combineReducers } from 'redux'

import postReducer from './postReducer'
import usersPostReducer from './usersPostReduce.js'
import usersCommentReducer from './usersCommentReducer.js'
import usersReducer from './usersReducer.js'
import userInfoReducer from './userInfoReducer.js'
import albumsReducer from './albumsReducer.js'
import albumPhotosReducer from './albumPhotosReducer.js'

const rootReducers = combineReducers({
postReducer,
usersPostReducer,
usersCommentReducer,
usersReducer,
userInfoReducer,
albumsReducer,
albumPhotosReducer
})

export default rootReducers