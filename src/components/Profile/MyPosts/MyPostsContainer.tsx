import { connect } from 'react-redux'
import { onAddPost } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { Component } from 'react'
import { RootStore } from '../../../redux/storeRedux'
import { postsType, profileType, usersType } from '../../../types/types'

type propsType = mapStateType & mapDispatchType

type mapStateType = {
	profile: profileType | null
	posts: Array<postsType>
	users: Array<usersType>
	authorizedUserId: string | null
}

type mapDispatchType = {
	onAddPost: (newPostText: string) => void
}

class MyPostsContainer extends Component<propsType> {
	render() {
		return (
			<MyPosts {...this.props} />
		)
	}
}

const mapStateToProps = (state: RootStore): mapStateType => ({
	profile: state.profilePage.profile,
	posts: state.profilePage.posts,
	authorizedUserId: state.auth.id,
	users: state.usersPage.users
})

export default connect<mapStateType, mapDispatchType, null, RootStore>
	(mapStateToProps, { onAddPost })
	(MyPostsContainer)