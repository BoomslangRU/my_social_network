import Header from './Header'
import { connect } from 'react-redux'
import { Component } from 'react'
import { RootStore } from '../../redux/storeRedux'

type propsType = {
	isAuth: boolean
	login: null | string
}

class HeaderContainer extends Component<propsType> {
	render() {
		return (
			<Header isAuth={this.props.isAuth} login={this.props.login} />
		)
	}
}

const mapStateToProps = (state: RootStore): propsType => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps, null)(HeaderContainer)