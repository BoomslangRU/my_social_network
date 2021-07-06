import { memo } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostForm from './PostForm/PostForm'

// React.memo in this version it does not make sense
// and additions for educational purposes
const MyPosts = memo(props => {

  let postsElements = props.posts.map(p => <Post key={p.key} message={p.message} likeCounter={p.likeCounter} />)

  return (
    <div className={s.item}>
      <div className={s.postBlock}>
        <PostForm onAddPost={props.onAddPost} />
      </div >
      {postsElements}
    </div>
  )
})

export default MyPosts

