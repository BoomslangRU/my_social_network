import { connect } from 'react-redux'
import { getUsers, followUsers, setCurrentPage, unfollowUsers, toggleFollowingProgress } from '../../redux/usersReducer'
import React from 'react'
import Users from './Users'
import Preloader from '../common/preloader/preloader'


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }
    render = () => {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollowUsers={this.props.unfollowUsers}
                followUsers={this.props.followUsers}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}


export default connect(mapStateToProps,
    { followUsers, unfollowUsers, setCurrentPage, toggleFollowingProgress, getUsers })
    (UsersAPIComponent)