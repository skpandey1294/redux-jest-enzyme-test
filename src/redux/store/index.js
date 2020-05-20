import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducers from '../reducers/index.js'

export const thunkMiddleware = [thunk]

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...thunkMiddleware)))
