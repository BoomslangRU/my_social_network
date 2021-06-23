import s from './Setting.module.css'
import Setting from './Setting'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import React from 'react'


class SettingContainer extends React.Component {
    render() {
        return (
            <div>
                <Setting logout={this.props.logout} />
            </div>
        )
    }
}

export default connect(null, { logout })(SettingContainer)