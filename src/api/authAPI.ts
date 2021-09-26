import { instance, responseType, resultCodeEnum, resultCodeForCaptcha } from './api'


type meResponseDataType = {
   id: number
   email: string
   login: string
}
type loginResponseDataType = {
   userId: number
}
type getCaptchaResponseType = {
   url: string
}

export const authAPI = {
   me() {
      return instance.get<responseType<meResponseDataType>>(`auth/me`)
         .then(response => {
            return response.data
         })
   },
   login(email: string, password: string, rememberMe: boolean, captcha: boolean) {
      return instance.post<responseType<loginResponseDataType, resultCodeForCaptcha | resultCodeEnum>>
         (`auth/login`, { email, password, rememberMe, captcha })
         .then(response => {
            return response.data
         })
   },
   logout() {
      return instance.delete<responseType>(`auth/login`)
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