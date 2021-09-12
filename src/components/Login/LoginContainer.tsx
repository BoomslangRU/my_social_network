import { Component } from 'react'
import { connect } from 'react-redux'
import { authLogin } from '../../redux/authReducer'
import { RootStore } from '../../redux/storeRedux'
import Login from './Login'

type propsType = mapStateType & mapDispatchType

type mapDispatchType = {
	authLogin: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type mapStateType = {
	isAuth: boolean
	captcha: null | string
}

class LoginContainer extends Component<propsType> {
	render() {
		return (
			<Login {...this.props} />
		)
	}
}

const mapStateToProps = (state: RootStore): mapStateType => ({
	isAuth: state.auth.isAuth,
	captcha: state.auth.captchaUrlSuccess
})

export default connect<mapStateType, mapDispatchType, null, RootStore>
	(mapStateToProps, { authLogin })
	(LoginContainer)