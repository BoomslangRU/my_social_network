import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />)

  let onAddPost = () => {
    props.onAddPost()
  }

  let onPostChange = (e) => {
    let text = e.target.value
    props.updateNewPostText(text)
  }
  
  return (
    <div className={s.item}>
      <h3>My posts</h3>
      <div className={s.postBlock}>
        <div>
          <textarea onChange={onPostChange}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div >
      {postsElements}
    </div>
  )
}

export default MyPosts