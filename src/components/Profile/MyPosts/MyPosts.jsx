import { memo } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostForm from './PostForm/PostForm'
import Preloader from '../../common/Preloader/Preloader'


// React.memo in this version it does not make sense
// and additions for educational purposes
const MyPosts = memo(props => {

  if (!props.profile) {
    return <Preloader />
  }

  let postsElements = props.posts.map(p =>
    <Post key={p.id} photo={props.profile.photos.small} message={p.message} likeCounter={p.likeCounter} />)

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

