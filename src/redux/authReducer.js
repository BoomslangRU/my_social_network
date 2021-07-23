import { authAPI } from '../api/api'


const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL'


const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrlSuccess: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data }
        case GET_CAPTCHA_URL:
            return { ...state, captchaUrlSuccess: action.captchaUrl }
        default:
            return state
    }
}

// Action Creators
const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, data: { id, login, email, isAuth } })
const getCaptchaSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL, captchaUrl })


// Thunk Creators
export const getAuthMe = () => async (dispatch) => {
    const response = await authAPI.me()
    if (response.resultCode === 0) {
        let { id, login, email } = response.data
        dispatch(setAuthUserData(id, login, email, true))
        dispatch(getCaptchaSuccess(null))
    }
}
export const authLogin = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(getAuthMe())
    } else if (response.resultCode === 10) {
        dispatch(getCaptchaUrl())
    } else {
        return Promise.reject(response.messages[0])
    }
}
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await authAPI.getCaptchaUrl()
    dispatch(getCaptchaSuccess(response.url))
}

export default authReducer