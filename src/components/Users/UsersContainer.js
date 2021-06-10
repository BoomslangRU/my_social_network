import { connect } from 'react-redux'
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow } from '../../redux/usersReducer'
import UsersAPIComponent from './UsersAPIComponent'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, 
    {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching} )
    (UsersAPIComponent)