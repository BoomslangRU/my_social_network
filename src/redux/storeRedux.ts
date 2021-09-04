import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import authReducer from './authReducer'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer'

const reducers = combineReducers({
	app: appReducer,
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer
})

type reducersType = typeof reducers
export type RootStore = ReturnType<reducersType>


//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// const store = createStore(reducers, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.__store__ = store

export default store