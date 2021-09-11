import { Component } from 'react';
import ModalWindowError from './ModalWindowError';
import { setGlobalError } from '../../../redux/profileReducer'
import { connect } from 'react-redux';
import { RootStore } from '../../../redux/storeRedux'

type propsType = {
    globalError: null | string
    setGlobalError: any
}

class ModalWindowErrorContainer extends Component<propsType> {
    render() {
        return <ModalWindowError {...this.props} />
    }
}

const mapStateToProps = (state: RootStore) => ({
    globalError: state.profilePage.globalError
})

export default connect(mapStateToProps, { setGlobalError })(ModalWindowErrorContainer)

