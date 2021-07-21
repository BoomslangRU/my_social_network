import { Component } from 'react'
import { connect } from 'react-redux'
import { authLogin } from '../../redux/authReducer'
import Login from './Login'


class LoginContainer extends Component {
    render() {
        return (
            <Login {...this.props} />
        )
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { authLogin })(LoginContainer)