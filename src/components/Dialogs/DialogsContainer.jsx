import { sendMessageCreator, updateNewMessageBodyCreation, } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    let onAddMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreation(body)
        props.store.dispatch(action)
    }
    return <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onAddMessageClick} dialogsPage={state} />
}

export default DialogsContainer