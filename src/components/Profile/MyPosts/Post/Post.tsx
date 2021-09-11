import { FC } from 'react'
import s from './Post.module.css'

import userPhoto from '../../../../assets/images/users.png'
import { profileType } from '../../../../types/types'

type propsType = {
  profile: profileType
  message: string
  likeCounter: number
}

const Post: FC<propsType> = props => {

  return (
    <div className={s.item}>
      <img src={props.profile.photos.small ? props.profile.photos.small : userPhoto} alt='avatar for post'></img>
      {props.message}
      <div>
        <span>{props.likeCounter} Like</span>
      </div>
    </div>
  )
}

export default Post