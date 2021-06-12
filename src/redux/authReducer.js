const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, login, email) => ({ type: SET_USER_DATA, data: {id, login, email} })

export default authReducer