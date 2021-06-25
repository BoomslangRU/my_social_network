import Setting from './Setting'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import React from 'react'
import { Redirect } from 'react-router-dom'


class SettingContainer extends React.Component {
    componentDidUpdate() {
        if (!this.props.isAuth) {    
            return <Redirect to={'/login'} />
        } 
    }
    render() {
        return (
            <div>
                <Setting logout={this.props.logout} isAuth={this.props.isAuth} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { logout })(SettingContainer)