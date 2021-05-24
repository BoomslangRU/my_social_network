import { connect } from 'react-redux'
import { addPostActionCreation, updateNewPostTextActionCreation } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreation(text)
            dispatch(action)
        },
        onAddPost: () => {
            dispatch(addPostActionCreation())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer