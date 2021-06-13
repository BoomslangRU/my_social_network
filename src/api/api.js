import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e428ac42-13f8-4a7a-9dab-dbeb5e7fa880'
    }
})


export const getUsers = (pageNumber, pageSize) => {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}

export const followUsers = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data
        })
}

export const unfollowUsers = (id) => {
    return instance.post(`follow/${id}`, {},)
        .then(response => {
            return response.data
        })
}

export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data
        })
}

export const getAuthMe = () => {
    return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
}
