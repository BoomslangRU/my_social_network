import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'be226811-1c2d-4462-a825-3b4251ba6858'
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
