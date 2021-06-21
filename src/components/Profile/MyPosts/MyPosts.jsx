import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostForm from './PostForm/PostForm'

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} key={p.key} likeCounter={p.likeCounter} />)

  return (
    <div className={s.item}>
      <div className={s.postBlock}>
        <PostForm onAddPost={props.onAddPost} />
      </div >
      {postsElements}
    </div>
  )
}

export default MyPosts

