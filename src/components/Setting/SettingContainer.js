import Setting from './Setting'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import { Component } from 'react'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'


class SettingContainer extends Component {
    render() {
        return (
            <div>
                <Setting {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { logout })
)(SettingContainer)