import { Form, Field } from 'react-final-form'
import s from './DialogsForm.module.css'

const DialogForm = (props) => {

    const onSubmit = (e) => {
        props.sendMessage(e.massageBody)
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
                        <div className={s.formRow}>
                            <Field name='massageBody' component='textarea' placeholder='Enter your massage' />
                        </div>
                        <div className={s.formRow}>
                            <button className={s.formRow} type='submit'>Add Message</button>
                        </div>
                    </div>
                </form>
            )}
        />
    )
}

export default DialogForm