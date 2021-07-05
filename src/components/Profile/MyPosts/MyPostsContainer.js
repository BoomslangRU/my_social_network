import { connect } from 'react-redux'
import { onAddPost } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { Component } from 'react'


class MyPostsContainer extends Component {
    render() {
        return (
            <MyPosts {...this.props} />
        )
    }
}
const mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
    authorizedUserId: state.auth.id,
    users: state.usersPage.users
})

export default connect(mapStateToProps, { onAddPost })(MyPostsContainer)