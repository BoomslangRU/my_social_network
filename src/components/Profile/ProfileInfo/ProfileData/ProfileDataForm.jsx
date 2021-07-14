import { Form, Field } from 'react-final-form'
import Preloader from '../../../common/Preloader/Preloader'
import s from '../ProfileInfo.module.css'
import styleForm from './ProfileDataForm.module.css'

const ProfileDataForm = (props, { onAddPost, profile }) => {
  const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contactsMe}><b>{contactTitle} :</b> <span className={s.addFont}>{contactValue ? contactValue : 'No information'}</span></div>
  }

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

  if (!props.profile) {
    return <Preloader />
  }
  return (

    <Form onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form className={s.railway} onSubmit={handleSubmit}>
          <div className={styleForm.description}>

            {/* input Nickname */}
            <div className={styleForm.formRow}>
              <Field name='fullName'
                render={({ input, meta }) => (
                  <div>
                    <b>Your Nickname?</b> <input {...input} type='text' />
                    {meta.touched && (meta.error || meta.submitError)
                      && <div className={s.error}>{meta.error || meta.submitError}</div>}
                  </div>
                )}
              />
            </div>

            {/* checkbox looking for a job */}
            <div className={styleForm.checkbox}>
            <b>Looking for a job?</b>
            <Field
                  name='lookingForAJob'
                  component='input'
                  type='checkbox'
                />
            </div>

            {/* input abut me */}
            <div className={styleForm.formRow}>
              <Field name='aboutMe'
                render={({ input, meta }) => (
                  <div>
                    <b>About Me: </b> <input {...input} type='text' />
                    {meta.touched && (meta.error || meta.submitError)
                      && <div className={s.error}>{meta.error || meta.submitError}</div>}
                  </div>
                )}
              />
            </div>

          {/* input professional skills */}
            <div className={styleForm.formRow}>
              <Field name='profSkills'
                render={({ input, meta }) => (
                  <div>
                    <b>My professional skills:</b> <input {...input} type='text' />
                    {meta.touched && (meta.error || meta.submitError)
                      && <div className={s.error}>{meta.error || meta.submitError}</div>}
                  </div>
                )}
              />
            </div>

          {/* information contacts */}
          <div className={styleForm.formRow}>
            <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
              return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })} </div>
          </div>
        </form >
      )}
/>
  )
}

export default ProfileDataForm