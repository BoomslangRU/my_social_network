import { Component } from 'react';
import ModalWindowError from './ModalWindowError';
import { setGlobalError } from '../../../redux/profileReducer'
import { connect } from 'react-redux';
import { RootStore } from '../../../redux/storeRedux'

type propsType = mapStateType & mapDispatchType

type mapStateType = {
	globalError: null | string
}

type mapDispatchType = {
	setGlobalError: (error: string | null) => void
}

class ModalWindowErrorContainer extends Component<propsType> {
	render() {
		return <ModalWindowError {...this.props} />
	}
}

const mapStateToProps = (state: RootStore): mapStateType => ({
	globalError: state.profilePage.globalError
})

export default connect<mapStateType, mapDispatchType, null, RootStore>
	(mapStateToProps, { setGlobalError })
	(ModalWindowErrorContainer)