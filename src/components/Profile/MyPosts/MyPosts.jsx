import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />)

  // Temporary solution
  let newPostElement = React.createRef()

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
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