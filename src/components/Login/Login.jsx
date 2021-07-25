import { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { Redirect } from 'react-router-dom'
import s from './Login.module.css'


const Login = ({ authLogin, isAuth, captcha }) => {

    let [messageError, setMessageError] = useState(null)

    const onSubmit = (e) => {
        authLogin(e.login, e.password, e.rememberMe, e.captcha)
            .catch(
                (response) => {
                    setMessageError(response)
                }
            )
    }


    const validate = (e) => {
        const errors = {}
        if (e.login && (e.login.length < 3 || e.login.length > 20)) {
            errors.login = 'login must be from 3 to 20 characters'
        }
        if (e.password && (e.password.length < 4 || e.password.length > 12)) {
            errors.password = 'password must be from 8 to 12 characters'
        }
        if (!e.login) {
            errors.login = 'Required'
        }
        if (!e.password) {
            errors.password = 'Required'
        }
        return errors
    }

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form className={s.railway} onSubmit={handleSubmit}>
                    <div className={s.loginItems}>
                        <h2>Login</h2>

                        {/* Input login */}
                        <div className={s.formRow}>
                            <Field name='login'
                                render={({ input, meta }) => (
                                    <div>
                                        <input {...input} type='text' placeholder='Login' />
                                        {meta.touched && (meta.error || meta.submitError)
                                            && <div className={s.error}>{meta.error || meta.submitError}</div>}
                                    </div>
                                )}
                            />
                        </div>

                        {/* Input password  */}
                        <div className={s.formRow}>
                            <Field name='password'
                                render={({ input, meta }) => (
                                    <div>
                                        <input {...input} type='password' placeholder='Password' />
                                        {meta.touched && (meta.error || meta.submitError)
                                            && <div className={s.error}>{meta.error || meta.submitError}</div>}
                                    </div>
                                )}
                            />
                        </div>
                        <div className={s.formRow}>
                            <Field name='rememberMe' component='input' type='checkbox' /> <p>remember me</p>
                        </div>
                        <div className={s.errorMessage}>
                            {messageError}
                        </div>

                        {/* Captcha */}
                        <div className={s.formRow}>
                            {captcha &&
                                <Field name='captcha'
                                    render={({ input, meta }) => (
                                        <div>
                                            <img src={captcha} alt='captcha' />
                                            <input {...input} type='text' placeholder='Captcha' />
                                            {meta.touched && (meta.error || meta.submitError)
                                                && <div className={s.error}>{meta.error || meta.submitError}</div>}
                                        </div>
                                    )}
                                />}
                        </div>

                        {/* Button submit */}
                        <div className={s.formRow}>
                            <button type='submit' >Login</button>
                        </div>

                    </div>
                </form>
            )}
        />
    )
}


export default Login