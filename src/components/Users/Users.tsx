import { FC, Fragment } from 'react'
import { usersType } from '../../types/types'
import Pagination from '../common/Pagination/Pagination'
import User from './User'

type propsType = {
	users: Array<usersType>
	totalUsersCount: number
	pageSize: number
	currentPage: number
	followingInProgress: Array<number>
	followUsers: (id: number) => void
	unfollowUsers: (id: number) => void
	onPageChanged: (pageNumber: number) => void
	setCurrentPage: (pageNumber: number) => void
}

const Users: FC<propsType> = props => {
	return (
		<Fragment>
			<Pagination setCurrentPage={props.setCurrentPage}
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				onPageChanged={props.onPageChanged}
			/>
			{props.users.map(u =>
				<User user={u}
					key={u.id}
					followingInProgress={props.followingInProgress}
					followUsers={props.followUsers}
					unfollowUsers={props.unfollowUsers}
				/>)}
		</Fragment>
	)
}

export default Users