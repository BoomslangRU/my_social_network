import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { usersAPI } from '../api/api'
import { usersType } from '../types/types'
import { updateObjectInArray } from '../utils/object-helpers'
import { RootStore } from './storeRedux'


const FOLLOW = 'usersPage/FOLLOW'
const UNFOLLOW = 'usersPage/UNFOLLOW'
const SET_USERS = 'usersPage/SET_USERS'
const SET_CURRENT_PAGE = 'usersPage/SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'usersPage/SET_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'usersPage/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'usersPage/TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
	users: [] as Array<usersType>,
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [] as Array<number> // array of id users
}

export type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: actionsTypes): initialStateType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state, users: updateObjectInArray(state.users, action.userID, 'id', { followed: true })
			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userID, 'id', { followed: false })
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
type actionsTypes = followActionType | unfollowActionType | setUsersActionType
	| setCurrentPageActionType | setTotalUsersCountActionType | toggleIsFetchingActionType
	| toggleFollowingProgressActionType

export type followActionType = {
	type: typeof FOLLOW
	userID: number
}
export const follow = (userID: number)
	: followActionType => ({ type: FOLLOW, userID })

export type unfollowActionType = {
	type: typeof UNFOLLOW
	userID: number
}
export const unfollow = (userID: number)
	: unfollowActionType => ({ type: UNFOLLOW, userID })

export type setUsersActionType = {
	type: typeof SET_USERS
	users: Array<usersType>
}
export const setUsers = (users: Array<usersType>)
	: setUsersActionType => ({ type: SET_USERS, users })

export type setCurrentPageActionType = {
	type: typeof SET_CURRENT_PAGE
	currentPage: number
}
export const setCurrentPage = (currentPage: number)
	: setCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })

export type setTotalUsersCountActionType = {
	type: typeof SET_USERS_COUNT
	totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number)
	: setTotalUsersCountActionType => ({ type: SET_USERS_COUNT, totalUsersCount })

export type toggleIsFetchingActionType = {
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean)
	: toggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })

export type toggleFollowingProgressActionType = {
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
	isFetching: boolean
	userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number)
	: toggleFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


// Thunk Creator
type thunkAction = ThunkAction<Promise<void>, RootStore, unknown, actionsTypes>

export const requestUsers = (currentPage: number, pageSize: number): thunkAction => async (dispatch) => {
	dispatch(toggleIsFetching(true))
	const response = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(toggleIsFetching(false))
	dispatch(setUsers(response.items))
	dispatch(setTotalUsersCount(response.totalCount))
}

const _followUnfollowFlow = async (dispatch: Dispatch<actionsTypes>, userID: number, apiMethod: any,
	actionCreator: (userID: number) => followActionType | unfollowActionType) => {
	dispatch(toggleFollowingProgress(true, userID))
	const response = await apiMethod(userID)
	if (response.resultCode === 0) {
		dispatch(actionCreator(userID))
	}
	dispatch(toggleFollowingProgress(false, userID))
}

export const followUsers = (userID: number): thunkAction => async (dispatch) => {
	_followUnfollowFlow(dispatch, userID, usersAPI.followUsers.bind(userID), unfollow)
}

export const unfollowUsers = (userID: number): thunkAction => async (dispatch) => {
	_followUnfollowFlow(dispatch, userID, usersAPI.unfollowUsers.bind(userID), follow)
}

export default usersReducer