import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'be226811-1c2d-4462-a825-3b4251ba6858'
    }
})

const processorData = () => (response) => {
    return response.data
}


export const usersAPI = {
    getUsers(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(processorData())
    },
    followUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(processorData())
    },
    unfollowUsers(id) {
        return instance.post(`follow/${id}`, {},)
            .then(processorData())
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(processorData())
    }
}

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(processorData())
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(processorData())
    },
    updateUserStatus(textStatus) {
        return instance.put(`profile/status`, { status: textStatus })
            .then(processorData())
    },
    savePhoto(filePhoto) {
        const formData = new FormData()
        formData.append('image', filePhoto)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(processorData())
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
            .then(processorData())
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(processorData())
    },
    login(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
            .then(processorData())
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(processorData())
    },
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(processorData())
    }
}

