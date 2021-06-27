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

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        message: state.auth.message
    }
}


export default connect(mapStateToProps, { authLogin })(LoginContainer)