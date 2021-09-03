import { getAuthMe } from './authReducer'


const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

type initialStateType = {
	initialize: boolean
}

const initialState: initialStateType = {
	initialize: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
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
type initializeSuccessActionType = {
	type: typeof INITIALIZED_SUCCESS
}
const initializeSuccess = ()
	: initializeSuccessActionType => ({ type: INITIALIZED_SUCCESS })

// Thunk Creators
export const initializeAPP = () => async (dispatch: any) => {
	const promise = dispatch(getAuthMe())
	// Promise.all made for future expansion thunk
	await Promise.all([promise])
		.then(() => {
			dispatch(initializeSuccess())
		})
}

export default appReducer