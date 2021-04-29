import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-70.jpg'></img>
      {props.message}
      <div>
        <span>{props.likeCounter} Like</span>
      </div>
    </div>
  )
}

export default Post