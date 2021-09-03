import { authAPI } from '../api/api'


const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL'

const initialState = {
	id: null as null | string,
	login: null as null | string,
	email: null as null | string,
	isAuth: false,
	captchaUrlSuccess: null as null | string
}

export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {
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
type dataType = {
	id: null | string
	login: null | string
	email: null | string
	isAuth: boolean
}
type setAuthUserDataActionType = {
	type: typeof SET_USER_DATA
	data: dataType
}
const setAuthUserData = (id: null | string, login: null | string, email: null | string, isAuth: boolean)
	: setAuthUserDataActionType => ({ type: SET_USER_DATA, data: { id, login, email, isAuth } })

type getCaptchaUrlActionType = {
	type: typeof GET_CAPTCHA_URL
	captchaUrl: null | string
}
const getCaptchaSuccess = (captchaUrl: null | string)
	: getCaptchaUrlActionType => ({ type: GET_CAPTCHA_URL, captchaUrl })


// Thunk Creators
export const getAuthMe = () => async (dispatch: any) => {
	const response = await authAPI.me()
	if (response.resultCode === 0) {
		let { id, login, email } = response.data
		dispatch(setAuthUserData(id, login, email, true))
		dispatch(getCaptchaSuccess(null))
	}
}
export const authLogin = (email: any, password: any, rememberMe: any, captcha: any) => async (dispatch: any) => {
	const response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.resultCode === 0) {
		dispatch(getAuthMe())
	} else if (response.resultCode === 10) {
		dispatch(getCaptchaUrl())
	} else {
		return Promise.reject(response.messages[0])
	}
}
export const logout = () => async (dispatch: any) => {
	const response = await authAPI.logout()
	if (response.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}
export const getCaptchaUrl = () => async (dispatch: any) => {
	const response = await authAPI.getCaptchaUrl()
	dispatch(getCaptchaSuccess(response.url))
}

export default authReducer