import React from 'react'
import { addPostActionCreation, updateNewPostTextActionCreation } from '../../../redux/profileReducer'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />)

  // Temporary solution
  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreation())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreation(text))
  }
  
  return (
    <div className={s.item}>
      <h3>My posts</h3>
      <div className={s.postBlock}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div >
      {postsElements}
    </div>
  )
}

export default MyPosts