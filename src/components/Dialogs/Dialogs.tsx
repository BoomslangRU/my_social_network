import DialogForm from './DialogForm/DialogForm'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import s from './Dialogs.module.css'
import { FC } from 'react'
import { initialStateDialogsPageType } from '../../redux/dialogsReducer'

type propsType = {
    sendMessage: any
    dialogsPage: initialStateDialogsPageType
}

const Dialogs: FC<propsType> = ({ dialogsPage, sendMessage }) => {
    const dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    const messagesElements = dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <DialogForm sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Dialogs
