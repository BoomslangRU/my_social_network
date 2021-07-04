import { authAPI } from '../api/api'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const ERROR_MESSAGE_RESPONSE = 'auth/ERROR_MESSAGE_RESPONSE'

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    messageError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case ERROR_MESSAGE_RESPONSE:
            return {
                ...state, messageError: action.message
            }
        default:
            return state
    }
}

// Action Creators
const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, data: { id, login, email, isAuth } })
const errorMessageResponse = (message) => ({ type: ERROR_MESSAGE_RESPONSE, message })

// Thunk Creators
export const getAuthMe = () => async (dispatch) => {
    const response = await authAPI.me()
    if (response.resultCode === 0) {
        let { id, login, email } = response.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const authLogin = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthMe())
    } else {
        dispatch(errorMessageResponse(response.messages[0]))
    }
}
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer