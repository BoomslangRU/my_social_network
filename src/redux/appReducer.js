import { getAuthMe } from './authReducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

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
export const initializeAPP = () => (dispatch) => {
    let promise = dispatch(getAuthMe())
    // Promise.all made for future expansion thunk
    Promise.all([promise])
        .then(() => {
            dispatch(initializeSuccess())
        })
}

export default appReducer