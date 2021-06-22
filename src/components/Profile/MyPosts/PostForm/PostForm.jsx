import { Form, Field } from 'react-final-form'
import s from './PostForm.module.css'

const PostForm = (props) => {
  const onSubmit = (e) => {
    if (e.newPostText) {
      props.onAddPost(e.newPostText)
    }
  }
  const validate = (e) => {
    const errors = {}
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
            <div className={s.postBlock}>
              <button type='submit'><span>Add Post</span></button>
            </div>
          </div>
        </form>
      )}
    />
  )
}

export default PostForm