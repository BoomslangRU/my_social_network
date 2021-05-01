import s from './MyPosts.module.css'
import Post from './Post/Post'

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
      <Post message='Hi, how are you?' likeCounter='12' />
      <Post message="It's my first post" likeCounter='15' />
    </div>
  )
}

export default MyPosts