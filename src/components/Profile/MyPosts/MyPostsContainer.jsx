import { addPostActionCreation, updateNewPostTextActionCreation } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreation())
    }

    let postChange = (text) => {
        let action = updateNewPostTextActionCreation(text)
        props.store.dispatch(action)
    }
    return <MyPosts updateNewPostText={postChange} onAddPost={addPost}
        posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
}

export default MyPostsContainer