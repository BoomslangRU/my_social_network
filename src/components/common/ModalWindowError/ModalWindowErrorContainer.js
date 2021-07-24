import { Component } from 'react';
import ModalWindowError from './ModalWindowError';
import { setGlobalError } from '../../../redux/profileReducer'
import { connect } from 'react-redux';

class ModalWindowErrorContainer extends Component {
    render() {
        return <ModalWindowError {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    globalError: state.profilePage.globalError
})

export default connect(mapStateToProps, { setGlobalError })(ModalWindowErrorContainer)

