import s from './Post.module.css'
import userPhoto from '../../../../assets/images/users.png'

const Post = ({ message, likeCounter, photo }) => {

  return (
    <div className={s.item}>
      <img src={photo ? photo : userPhoto} alt='avatar for post'></img>
      {message}
      <div>
        <span>{likeCounter} Like</span>
      </div>
    </div>
  )
}

export default Post