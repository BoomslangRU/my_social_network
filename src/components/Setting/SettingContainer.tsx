import Setting from './Setting'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import { Component } from 'react'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { RootStore } from '../../redux/storeRedux'

type propsType = {
	logout: () => void
}

class SettingContainer extends Component<propsType> {
	render() {
		return (
			<div>
				<Setting logout={this.props.logout} />
			</div>
		)
	}
}

const mapStateToProps = (state: RootStore) => ({
	isAuth: state.auth.isAuth
})

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { logout })
)(SettingContainer)