import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { requestUsers, followUsers, setCurrentPage, unfollowUsers } from '../../redux/usersReducer'
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'
import { usersType } from '../../types/types'
import { RootStore } from '../../redux/storeRedux'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'


type propsType = mapStateType & mapDispatchType

type mapDispatchType = {
	requestUsers: (currentPage: number, pageSize: number) => void
	setCurrentPage: (pageNumber: number) => void
	followUsers: (id: number) => void
	unfollowUsers: (id: number) => void
}

type mapStateType = {
	users: Array<usersType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: Array<number>
}

class UsersComponent extends Component<propsType> {
	componentDidMount() {
		const { currentPage, pageSize } = this.props
		this.props.requestUsers(currentPage, pageSize)
	}
	onPageChanged: (pageNumber: number) => void = (pageNumber: number) => {
		const { pageSize } = this.props
		this.props.requestUsers(pageNumber, pageSize)
		this.props.setCurrentPage(pageNumber)
	}
	render() {
		return (
			<Fragment>
				{this.props.isFetching ? <Preloader /> : null}
				< Users {...this.props} onPageChanged={this.onPageChanged} />
			</Fragment>
		)
	}
}

const mapStateToProps = (state: RootStore): mapStateType => ({
	users: getUsers(state),
	pageSize: getPageSize(state),
	totalUsersCount: getTotalUsersCount(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state)
})

export default
	connect<mapStateType, mapDispatchType, null, RootStore>
		(mapStateToProps, { followUsers, unfollowUsers, setCurrentPage, requestUsers })
		(UsersComponent)
