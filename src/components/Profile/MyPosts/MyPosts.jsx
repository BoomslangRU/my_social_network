import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      My posts
      <div className={s.item}>
        <textarea></textarea>
        <button>Add Post</button>
      </div >
      <Post message='Hi, how are you?' likeCounter='12' />
      <Post message="It's my first post" likeCounter='15' />
    </div>
  )
}

export default MyPosts