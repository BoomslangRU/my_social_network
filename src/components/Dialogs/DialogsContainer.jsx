import { connect } from 'react-redux'
import { sendMessageCreator, updateNewMessageBodyCreation, } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (body) => {
            dispatch(updateNewMessageBodyCreation(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer