import { connect } from 'react-redux'
import { onAddPost } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect(mapStateToProps, { onAddPost })(MyPosts)

export default MyPostsContainer