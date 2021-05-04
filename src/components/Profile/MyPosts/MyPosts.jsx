import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />)

  return (
    <div className={s.item}>
      <h3>My posts</h3>
      <div className={s.postBlock}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div >
      {postsElements}
    </div>
  )
}

export default MyPosts