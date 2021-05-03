import s from './MyPosts.module.css'
import Post from './Post/Post'

let posts = [
  { message: 'Hi, how are you?', likeCounter: 12 },
  { message: 'It\'s my first post', likeCounter: 15 }
]

let postsElements = posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />)

const MyPosts = () => {
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