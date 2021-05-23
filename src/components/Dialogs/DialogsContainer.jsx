import { sendMessageCreator, updateNewMessageBodyCreation, } from '../../redux/dialogsReducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage

            let onAddMessage = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageText = (body) => {
                let action = updateNewMessageBodyCreation(body)
                store.dispatch(action)
            }
            return <Dialogs updateNewMessage={onNewMessageText} sendMessage={onAddMessage} dialogsPage={state} />
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer