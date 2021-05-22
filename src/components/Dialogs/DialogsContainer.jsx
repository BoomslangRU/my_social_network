import { sendMessageCreator, updateNewMessageBodyCreation, } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    let onAddMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageText = (body) => {
        let action = updateNewMessageBodyCreation(body)
        props.store.dispatch(action)
    }
    return <Dialogs updateNewMessage={onNewMessageText} sendMessage={onAddMessage} dialogsPage={state} />
}

export default DialogsContainer