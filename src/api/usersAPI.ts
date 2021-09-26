import { getItemsType, instance, responseType } from './api'

export const usersAPI = {
   getUsers(pageNumber: number, pageSize: number) {
      return instance.get<getItemsType>(`users?page=${pageNumber}&count=${pageSize}`)
         .then(response => {
            return response.data
         })
   },
   followUsers(id: number) {
      return instance.delete<responseType>(`follow/${id}`)
         .then(response => {
            return response.data
         })
   },
   unfollowUsers(id: number) {
      return instance.post<responseType>(`follow/${id}`, {},)
         .then(response => {
            return response.data
         })
   }
}