import Pagination from '../common/Pagination/Pagination'
import User from './User'


const Users = (props) => {
    return <div>
        <Pagination setCurrentPage={props.setCurrentPage}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
        />
        {props.users.map(u =>
            <User key={u.id}
                user={u}
                followingInProgress={props.followingInProgress}
                followUsers={props.followUsers}
                unfollowUsers={props.unfollowUsers}
            />)}
    </div >
}

export default Users