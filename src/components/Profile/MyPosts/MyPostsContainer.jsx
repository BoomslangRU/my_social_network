import { connect } from 'react-redux'
import { onAddPost } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import React from 'react'


class MyPostsContainer extends React.Component {
    render() {
        return (
            <MyPosts {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        authorizedUserId: state.auth.id,
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, { onAddPost })(MyPostsContainer)