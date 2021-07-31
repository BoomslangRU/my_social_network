import { Form, Field } from 'react-final-form'
import s from './DialogsForm.module.css'
import styleButton from '../../../styles/styleButton.module.css'

const DialogForm = (props) => {

    const onSubmit = (e) => {
        if (e.massageBody) {
        props.sendMessage(e.massageBody)
        e.massageBody = ''
        }
    }
    const validate = (e) => {
        const errors = {}
        if (e.massageBody && e.massageBody.length > 80) {
          errors.massageBody = 'massages must not exceed 80 characters'
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
                        <div className={s.formRow}>
                            <Field name='massageBody'
                                render={({ input, meta }) => (
                                    <div>
                                        <textarea {...input} placeholder='Enter your massage' />
                                        {meta.error && <div className={s.error}>{meta.error}</div>}
                                    </div>
                                )}
                            />
                        </div>
                        <div className={styleButton.buttonBlock}>
                            <button className={s.formRow} type='submit'>Add Message</button>
                        </div>
                    </div>
                </form>
            )}
        />
    )
}

export default DialogForm