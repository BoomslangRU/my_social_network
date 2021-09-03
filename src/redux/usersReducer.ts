import { usersAPI } from '../api/api'
import { updateObjectInArray } from '../utils/object-helpers'

const FOLLOW = 'usersPage/FOLLOW'
const UNFOLLOW = 'usersPage/UNFOLLOW'
const SET_USERS = 'usersPage/SET_USERS'
const SET_CURRENT_PAGE = 'usersPage/SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'usersPage/SET_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'usersPage/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'usersPage/TOGGLE_IS_FOLLOWING_PROGRESS'


type initialStateType = {
	users: object[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: object[]
}

let initialState: initialStateType = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
}

const usersReducer = (state = initialState, action: any): initialStateType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state, users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
			}
		case SET_USERS:
			return { ...state, users: action.users }
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }
		case SET_USERS_COUNT:
			return { ...state, totalUsersCount: action.totalUsersCount }
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}
		default:
			return state
	}
}

// Action Creator
export type followActionType = {
	type: typeof FOLLOW
	userId: string
}
export type unfollowActionType = {
	type: typeof UNFOLLOW
	userId: string
}
export type setUsersActionType = {
	type: typeof SET_USERS
	users: []
}
export type setCurrentPageActionType = {
	type: typeof SET_CURRENT_PAGE
	currentPage: number
}
export type setTotalUsersCountActionType = {
	type: typeof SET_USERS_COUNT
	totalUsersCount: number
}
export type toggleIsFetchingActionType = {
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}
export type toggleFollowingProgressActionType = {
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
	isFetching: boolean
	userId: string
}
export const follow = (userId: string)
	: followActionType => ({ type: FOLLOW, userId })
export const unfollow = (userId: string)
	: unfollowActionType => ({ type: UNFOLLOW, userId })
export const setUsers = (users: [])
	: setUsersActionType => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number)
	: setCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount: number)
	: setTotalUsersCountActionType => ({ type: SET_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching: boolean)
	: toggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching: boolean, userId: string)
	: toggleFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

// Thunk Creator
export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
	dispatch(toggleIsFetching(true))
	const response = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(toggleIsFetching(false))
	dispatch(setUsers(response.items))
	dispatch(setTotalUsersCount(response.totalCount))
}

const followUnfollowFlow = async (dispatch: any, userID: string, apiMethod: any, actionCreator: any) => {
	dispatch(toggleFollowingProgress(true, userID))
	const response = await apiMethod(userID)
	if (response.resultCode === 0) {
		dispatch(actionCreator(userID))
	}
	dispatch(toggleFollowingProgress(false, userID))
}

export const followUsers = (userID: string) => async (dispatch: any) => {
	followUnfollowFlow(dispatch, userID, usersAPI.followUsers.bind(userID), unfollow)
}

export const unfollowUsers = (userID: string) => async (dispatch: any) => {
	followUnfollowFlow(dispatch, userID, usersAPI.unfollowUsers.bind(userID), follow)
}


export default usersReducer