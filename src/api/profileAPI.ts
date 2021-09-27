import { photosType, profileType } from '../types/types'
import { instance, responseType } from './api'


type saveProfileResponseType = {
   photos: photosType
}

export const ProfileAPI = {
   getProfile(id: number) {
      return instance.get<profileType>(`profile/${id}`)
         .then(response => {
            return response.data
         })
   },
   getUserStatus(id: number) {
      return instance.get<string>(`profile/status/${id}`)
         .then(response => {
            return response.data
         })
   },
   updateUserStatus(textStatus: string) {
      return instance.put<responseType>(`profile/status`, { status: textStatus })
         .then(response => {
            return response.data
         })
   },
   savePhoto(filePhoto: any) {
      const formData = new FormData()
      formData.append('image', filePhoto)
      return instance.put<responseType<saveProfileResponseType>>(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
         .then(response => {
            return response.data
         })
   },
   saveProfile(profile: profileType) {
      return instance.put<responseType>(`profile`, profile)
         .then(response => {
            return response.data
         })
   }
}