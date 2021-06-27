import { applyMiddleware, combineReducers, createStore } from 'redux'
import authReducer from './authReducer'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer'

let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store