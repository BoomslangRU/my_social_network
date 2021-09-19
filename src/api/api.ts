import axios from 'axios'
import { contactsType, photosType, profileType, usersType } from './../types/types'


const instance = axios.create({
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


// usersAPI
type getUsersResponseType = {
	items: Array<usersType>
	totalCount: number
	error: string
}
type followUsersResponseType = {
	resultCode: resultCodeEnum
	messages: Array<string>
	data: object[]
}
type unfollowUsersResponseType = {
	resultCode: resultCodeEnum
	messages: Array<string>
	data: object[]
}

export const usersAPI = {
	getUsers(pageNumber: number, pageSize: number) {
		return instance.get<getUsersResponseType>(`users?page=${pageNumber}&count=${pageSize}`)
			.then(response => {
				return response.data
			})
	},
	followUsers(id: number) {
		return instance.delete<followUsersResponseType>(`follow/${id}`)
			.then(response => {
				return response.data
			})
	},
	unfollowUsers(id: number) {
		return instance.post<unfollowUsersResponseType>(`follow/${id}`, {},)
			.then(response => {
				return response.data
			})
	}
}


// ProfileAPI
type getProfileResponseType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: contactsType
	photos: photosType
}
type updateUserStatusResponseType = {
	resultCode: resultCodeEnum
	messages: Array<string>
	data: object[]
}
type saveProfileResponseType = {
	resultCode: resultCodeEnum
	messages: Array<string>
	data: object[]
}

export const ProfileAPI = {
	getProfile(id: number) {
		return instance.get<getProfileResponseType>(`profile/${id}`)
			.then(response => {
				return response.data
			})
	},
	getUserStatus(id: number) {
		return instance.get(`profile/status/${id}`)
			.then(response => {
				return response.data
			})
	},
	updateUserStatus(textStatus: string) {
		return instance.put<updateUserStatusResponseType>(`profile/status`, { status: textStatus })
			.then(response => {
				return response.data
			})
	},
	savePhoto(filePhoto: any) {
		const formData = new FormData()
		formData.append('image', filePhoto)
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
			.then(response => {
				return response.data
			})
	},
	saveProfile(profile: profileType) {
		return instance.put<saveProfileResponseType>(`profile`, profile)
			.then(response => {
				return response.data
			})
	}
}


// authAPI
type meResponseType = {
	data: {
		id: number
		email: string
		login: string
	}
	resultCode: resultCodeEnum
	messages: string
}

type loginResponseType = {
	data: {
		userId: number
	}
	resultCode: resultCodeEnum | resultCodeForCaptcha
	messages: Array<string>
}

type logoutResponseType = {
	resultCode: resultCodeEnum
	messages: Array<string>
	data: object[]
}

type getCaptchaResponseType = {
	url: string
}

export const authAPI = {
	me() {
		return instance.get<meResponseType>(`auth/me`)
			.then(response => {
				return response.data
			})
	},
	login(email: string, password: string, rememberMe: boolean, captcha: boolean) {
		return instance.post<loginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
			.then(response => {
				return response.data
			})
	},
	logout() {
		return instance.delete<logoutResponseType>(`auth/login`)
			.then(response => {
				return response.data
			})
	},
	getCaptchaUrl() {
		return instance.get<getCaptchaResponseType>(`security/get-captcha-url`)
			.then(response => {
				return response.data
			})
	}
}