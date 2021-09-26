import axios from 'axios'
import { usersType } from '../types/types'


export const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'be226811-1c2d-4462-a825-3b4251ba6858'
	}
})


//enums
export enum resultCodeEnum {
	Success = 0,
	Error = 1
}
export enum resultCodeForCaptcha {
	CaptchaRequired = 10
}


export type responseType<D = {}, RC = resultCodeEnum> = {
	data: D
	messages: Array<string>
	resultCode: RC
}

export type getItemsType = {
	items: Array<usersType>
	totalCount: number
	error: string | null
}