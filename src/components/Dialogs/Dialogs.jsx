import { Redirect } from 'react-router-dom'
import DialogItem from './DialogItem/DialogsItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />)
    let newMessageBody = props.dialogsPage.newMessageBody

    let onAddMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessage(body)
    }

    if (!props.isAuth) return <Redirect to='/login' />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.textarea}>
                    <textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message' />
                </div>
                <div>
                    <button onClick={onAddMessageClick}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs