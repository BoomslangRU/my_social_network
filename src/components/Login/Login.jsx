import { Form, Field } from 'react-final-form'
import s from './Login.module.css'

const onSubmit = (e) => {
    debugger
}
const validate = (e) => {
    debugger
}

const Login = () => (
    <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
            <form className={s.railway} onSubmit={handleSubmit}>
                <div className={s.loginItems}>
                    <h2>Login</h2>
                    <div className={s.formRow}>
                        <Field name='login' component='input' placeholder='Login' />
                    </div>
                    <div className={s.formRow}>
                        <Field name='password' component='input' placeholder='Password' />
                    </div>
                    <div className={s.formRow}>
                        <Field name='rememberMe' component='input' type='checkbox' /> <p>remember me</p>
                    </div>
                    <div className={s.formRow}>
                    <button className={s.formRow} type='submit'>Login</button>
                    </div>
                </div>
            </form>
        )}
    />
)
export default Login