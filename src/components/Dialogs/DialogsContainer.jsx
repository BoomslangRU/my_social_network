import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { sendMessage } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { sendMessage })
)(Dialogs)