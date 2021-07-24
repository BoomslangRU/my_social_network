import { getAuthMe } from './authReducer'

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

const initialState = {
    initialize: false
}

const appReducer = (state = initialState, action) => {
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
const initializeSuccess = () => ({ type: INITIALIZED_SUCCESS })

// Thunk Creators
export const initializeAPP = () => async (dispatch) => {
    const promise = dispatch(getAuthMe())
    // Promise.all made for future expansion thunk
    await Promise.all([promise])
        .then(() => {
            dispatch(initializeSuccess())
        })
}

export default appReducer