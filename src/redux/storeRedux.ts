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

type propertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type inferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<propertiesTypes<T>>


//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// const store = createStore(reducers, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.__store__ = store

export default store