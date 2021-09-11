import { Component } from 'react'
import { connect } from 'react-redux'
import { authLogin } from '../../redux/authReducer'
import { RootStore } from '../../redux/storeRedux'
import Login from './Login'

type propsType = {
    isAuth: boolean
    captcha: null | string
    authLogin: any
}

class LoginContainer extends Component<propsType> {
    render() {
        return (
            <Login {...this.props} />
        )
    }
}
const mapStateToProps = (state: RootStore) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captchaUrlSuccess
})


export default connect(mapStateToProps, { authLogin })(LoginContainer)