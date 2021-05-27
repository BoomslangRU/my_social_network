const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://www.kino-teatr.ru/acter/photo/9/6/285169/824299.jpg', 
        followed: true, fullName: 'Alexander', status: 'I am a BOSS', location: { city: 'Moscow', country: 'Russia' } },
        { id: 2, photoUrl: 'https://vsefz.ru/wp-content/uploads/2019/06/ASem-4.jpg', 
        followed: true, fullName: 'Anna', status: 'I am a BOSS too', location: { city: 'Moscow', country: 'Russia' } },
        { id: 3, photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5718a873638623.5c101d92c0531.jpg', 
        followed: false, fullName: 'Ivan', status: 'I am a little BOSS', location: { city: 'Bryansk', country: 'Russia' } }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (user) => ({ type: SET_USERS, user })

export default usersReducer