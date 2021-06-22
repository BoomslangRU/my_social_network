import { Form, Field } from 'react-final-form'
import s from './Login.module.css'

const onSubmit = (e) => {
    // debugger
}
const validate = (e) => {
    const errors = {}
    if (e.login && (e.login.length < 3 || e.login.length > 20)) {
        errors.login = 'login must be from 3 to 20 characters'
    }
    if (e.password && (e.password.length < 8 || e.password.length > 12)) {
        errors.password = 'password must be from 8 to 12 characters'
    }
    return errors
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
                        <Field name='login'
                            render={({ input, meta }) => (
                                <div>
                                    <input {...input} placeholder='Login' />
                                    {meta.touched && meta.error && <div className={s.error}>{meta.error}</div>}
                                </div>
                            )}
                        />
                    </div>
                    <div className={s.formRow}>
                    <Field name='password'
                            render={({ input, meta }) => (
                                <div>
                                    <input {...input} placeholder='Password' />
                                    {meta.touched && meta.error && <div className={s.error}>{meta.error}</div>}
                                </div>
                            )}
                        />
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