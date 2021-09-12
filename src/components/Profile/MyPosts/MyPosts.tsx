import { FC, memo } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostForm from './PostForm/PostForm'
import Preloader from '../../common/Preloader/Preloader'
import { postsType, profileType } from '../../../types/types'


type propsType = {
	profile: profileType | null
	posts: Array<postsType>
	onAddPost: (newPostText: string) => void
}

// React.memo in this version it does not make sense
// and additions for educational purposes
const MyPosts: FC<propsType> = memo(props => {

	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={s.item}>
			<div className={s.postBlock}>
				<PostForm onAddPost={props.onAddPost} />
			</div >
			{props.posts.map(p =>
				<Post key={p.id} {...props} message={p.message} likeCounter={p.likeCounter} />)}
		</div>
	)
})

export default MyPosts