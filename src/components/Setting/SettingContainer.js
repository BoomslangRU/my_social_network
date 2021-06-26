import Setting from './Setting'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import React from 'react'


class SettingContainer extends React.Component {
    render() {
        return (
            <div>
                <Setting {...this.props} />
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