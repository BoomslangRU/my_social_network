import { addPostActionCreation, updateNewPostTextActionCreation } from '../../../redux/profileReducer'
import StoreContext from '../../../StoreContext'
import MyPosts from './MyPosts'

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState()
            let addPost = () => {
                store.dispatch(addPostActionCreation())
            }

            let postChange = (text) => {
                let action = updateNewPostTextActionCreation(text)
                store.dispatch(action)
            }
            return <MyPosts updateNewPostText={postChange} onAddPost={addPost}
                posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
        }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer