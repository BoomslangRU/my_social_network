import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { usersAPI } from '../api/usersAPI'
import { usersType } from '../types/types'
import { updateObjectInArray } from '../utils/object-helpers'
import { inferActionsTypes, RootStore } from './storeRedux'


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
		case 'usersPage/FOLLOW':
			return {
				...state, users: updateObjectInArray(state.users, action.userID, 'id', { followed: true })
			}
		case 'usersPage/UNFOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.userID, 'id', { followed: false })
			}
		case 'usersPage/SET_USERS':
			return { ...state, users: action.users }
		case 'usersPage/SET_CURRENT_PAGE':
			return { ...state, currentPage: action.currentPage }
		case 'usersPage/SET_USERS_COUNT':
			return { ...state, totalUsersCount: action.totalUsersCount }
		case 'usersPage/TOGGLE_IS_FETCHING':
			return { ...state, isFetching: action.isFetching }
		case 'usersPage/TOGGLE_IS_FOLLOWING_PROGRESS':
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
type actionsTypes = inferActionsTypes<typeof actions>

export const actions = {
	follow: (userID: number) => ({ type: 'usersPage/FOLLOW', userID } as const),
	unfollow: (userID: number) => ({ type: 'usersPage/UNFOLLOW', userID } as const),
	setUsers: (users: Array<usersType>) => ({ type: 'usersPage/SET_USERS', users } as const),
	setCurrentPage: (currentPage: number) => ({ type: 'usersPage/SET_CURRENT_PAGE', currentPage } as const),
	setTotalUsersCount: (totalUsersCount: number) => ({ type: 'usersPage/SET_USERS_COUNT', totalUsersCount } as const),
	toggleIsFetching: (isFetching: boolean) => ({ type: 'usersPage/TOGGLE_IS_FETCHING', isFetching } as const),
	toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'usersPage/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const)
}


// Thunk Creator
type thunkAction = ThunkAction<Promise<void>, RootStore, unknown, actionsTypes>

export const requestUsers = (currentPage: number, pageSize: number): thunkAction => async (dispatch) => {
	dispatch(actions.toggleIsFetching(true))
	const response = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(actions.toggleIsFetching(false))
	dispatch(actions.setUsers(response.items))
	dispatch(actions.setTotalUsersCount(response.totalCount))
}

const _followUnfollowFlow = async (dispatch: Dispatch<actionsTypes>, userID: number, apiMethod: any,
	actionCreator: (userID: number) => actionsTypes) => {
	dispatch(actions.toggleFollowingProgress(true, userID))
	const response = await apiMethod(userID)
	if (response.resultCode === 0) {
		dispatch(actionCreator(userID))
	}
	dispatch(actions.toggleFollowingProgress(false, userID))
}

export const followUsers = (userID: number): thunkAction => async (dispatch) => {
	_followUnfollowFlow(dispatch, userID, usersAPI.followUsers.bind(userID), actions.unfollow)
}

export const unfollowUsers = (userID: number): thunkAction => async (dispatch) => {
	_followUnfollowFlow(dispatch, userID, usersAPI.unfollowUsers.bind(userID), actions.follow)
}

export default usersReducer