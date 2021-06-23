import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authLogin } from '../../redux/authReducer'
import Login from './Login'


class LoginContainer extends React.Component {
    // componentDidUpdate() {
    //     if (this.props.isAuth) {
    //         return <Redirect to={'/profile'} />
    //     }
    // }

    render() {
        return (
            <Login authLogin={this.props.authLogin} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { authLogin })(LoginContainer)