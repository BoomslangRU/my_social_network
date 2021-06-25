import React from 'react'
import { connect } from 'react-redux'
import { authLogin } from '../../redux/authReducer'
import Login from './Login'


class LoginContainer extends React.Component {
    render() {
        return (
            <Login authLogin={this.props.authLogin} isAuth={this.props.isAuth} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { authLogin })(LoginContainer)