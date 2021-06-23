import * as axios from 'axios'
import Login from '../components/Login/Login'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'be226811-1c2d-4462-a825-3b4251ba6858'
    }
})


export const usersAPI = {
    getUsers(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUsers(id) {
        return instance.post(`follow/${id}`, {},)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateUserStatus(textStatus) {
        return instance.put(`profile/status`, { status: textStatus })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, { email, password, rememberMe })
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

