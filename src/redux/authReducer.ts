import { resultCodeEnum, resultCodeForCaptcha } from './../api/api';
import { ThunkAction } from 'redux-thunk'
import { authAPI } from '../api/authAPI'
import { RootStore } from './storeRedux'


const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL'

const initialState = {
	id: null as null | number,
	login: null as null | string,
	email: null as null | string,
	isAuth: false,
	captchaUrlSuccess: null as null | string
}

export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: actionsTypes): initialStateType => {
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
type actionsTypes = setAuthUserDataActionType | getCaptchaUrlActionType

type dataType = {
	id: null | number
	login: null | string
	email: null | string
	isAuth: boolean
}
type setAuthUserDataActionType = {
	type: typeof SET_USER_DATA
	data: dataType
}
const setAuthUserData = (id: null | number, login: null | string, email: null | string, isAuth: boolean)
	: setAuthUserDataActionType => ({ type: SET_USER_DATA, data: { id, login, email, isAuth } })

type getCaptchaUrlActionType = {
	type: typeof GET_CAPTCHA_URL
	captchaUrl: null | string
}
const getCaptchaSuccess = (captchaUrl: null | string)
	: getCaptchaUrlActionType => ({ type: GET_CAPTCHA_URL, captchaUrl })


// Thunk Creators
type thunkAction = ThunkAction<Promise<void>, RootStore, unknown, actionsTypes>

export const getAuthMe = (): thunkAction => async (dispatch) => {
	const data = await authAPI.me()
	if (data.resultCode === resultCodeEnum.Success) {
		let { id, login, email } = data.data
		dispatch(setAuthUserData(id, login, email, true))
		dispatch(getCaptchaSuccess(null))
	}
}
export const authLogin = (email: string, password: string, rememberMe: boolean, captcha: boolean): thunkAction => async (dispatch) => {
	const data = await authAPI.login(email, password, rememberMe, captcha)
	if (data.resultCode === resultCodeEnum.Success) {
		dispatch(getAuthMe())
	} else if (data.resultCode === resultCodeForCaptcha.CaptchaRequired) {
		dispatch(getCaptchaUrl())
	} else {
		return Promise.reject(data.messages[0])
	}
}
export const logout = (): thunkAction => async (dispatch) => {
	const data = await authAPI.logout()
	if (data.resultCode === resultCodeEnum.Success) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}
export const getCaptchaUrl = (): thunkAction => async (dispatch) => {
	const data = await authAPI.getCaptchaUrl()
	dispatch(getCaptchaSuccess(data.url))
}

export default authReducer