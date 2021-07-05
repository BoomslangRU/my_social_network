import { connect } from 'react-redux'
import { requestUsers, followUsers, setCurrentPage, unfollowUsers, toggleFollowingProgress } from '../../redux/usersReducer'
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'
import Users from './Users'
import Preloader from '../common/preloader/preloader'
import { compose } from 'redux'
import { Component } from 'react'


class UsersAPIComponent extends Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.requestUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props
        this.props.requestUsers(pageNumber, pageSize)
        this.props.setCurrentPage(pageNumber)
    }
    render = () => {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged} />
        </>
    }
}


let mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
})


export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, { followUsers, unfollowUsers, setCurrentPage, toggleFollowingProgress, requestUsers })
)(UsersAPIComponent)