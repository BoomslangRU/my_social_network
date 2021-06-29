import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const ERROR_MESSAGE_RESPONSE = 'ERROR_MESSAGE_RESPONSE'

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
const errorMessageResponse = (message) => ({ type: ERROR_MESSAGE_RESPONSE, message})

// Thunk Creators
export const getAuthMe = () => {
    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, login, email } = data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}
export const authLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthMe())
                } else {
                    dispatch(errorMessageResponse(data.messages[0]))
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

export default authReducer