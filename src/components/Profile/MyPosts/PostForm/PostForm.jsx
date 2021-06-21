import { Form, Field } from 'react-final-form'
import s from './PostForm.module.css'

const PostForm = (props) => {
    const onSubmit = (e) => {
      props.onAddPost(e.newPostText)
    }
    const validate = (e) => {
      // debugger
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
                <Field name='newPostText' component='textarea' />
              </div>
              <div className={s.postBlock}>
                <button className={s.formRow} type='submit'>Add Post</button>
              </div>
            </div>
          </form>
        )}
      />
    )
  }

  export default PostForm