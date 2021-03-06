import { Form, Field } from 'react-final-form'
import s from './PostForm.module.css'
import styleButton from '../../../../styles/styleButton.module.css'
import { FC } from 'react'


type propsType = {
	onAddPost: (newPostText: string) => void
}

const PostForm: FC<propsType> = ({ onAddPost }) => {
	const onSubmit = (e: any) => {
		if (e.newPostText) {
			onAddPost(e.newPostText)
			e.newPostText = ''
		}
	}
	const validate = (e: any) => {
		const errors: any = {}
		if (e.newPostText && e.newPostText.length > 100) {
			errors.newPostText = 'post must not exceed 100 characters'
		}
		return errors
	}
	return (
		<Form
			onSubmit={onSubmit}
			validate={validate}
			render={({ handleSubmit }) => (
				<form className={s.railway} onSubmit={handleSubmit}>
					<div className={s.textarea}>
						<h3>My posts</h3>
						<div className={s.postBlock}>
							<Field name='newPostText'
								render={({ input, meta }) => (
									<div>
										<textarea {...input} />
										{meta.error && <div className={s.error}>{meta.error}</div>}
									</div>
								)}
							/>
						</div>
						<div className={styleButton.buttonBlock}>
							<button type='submit'><span>Add Post</span></button>
						</div>
					</div>
				</form>
			)}
		/>
	)
}

export default PostForm