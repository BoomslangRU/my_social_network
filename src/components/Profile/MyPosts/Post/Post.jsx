import s from './Post.module.css'

const Post = ({ message, likeCounter }) => {
  return (
    <div className={s.item}>
      <img src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-70.jpg' alt='avatar for post'></img>
      {message}
      <div>
        <span>{likeCounter} Like</span>
      </div>
    </div>
  )
}

export default Post