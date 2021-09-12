import { ThunkAction } from 'redux-thunk'
import { getAuthMe } from './authReducer'
import { RootStore } from './storeRedux'


const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

type initialStateType = {
	initialize: boolean
}

const initialState: initialStateType = {
	initialize: false
}

const appReducer = (state = initialState, action: actionsTypes): initialStateType => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state, initialize: true
			}
		default:
			return state
	}
}

// Action Creators
type actionsTypes = initializeSuccessActionType

type initializeSuccessActionType = {
	type: typeof INITIALIZED_SUCCESS
}
const initializeSuccess = ()
	: initializeSuccessActionType => ({ type: INITIALIZED_SUCCESS })

// Thunk Creators
type thunkAction = ThunkAction<Promise<void>, RootStore, unknown, actionsTypes>
export const initializeAPP = (): thunkAction => async (dispatch) => {
	const promise = dispatch(getAuthMe())
	// Promise.all made for future expansion thunk
	await Promise.all([promise])
		.then(() => {
			dispatch(initializeSuccess())
		})
}

export default appReducer