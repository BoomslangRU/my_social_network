import DialogForm from './DialogForm/DialogForm'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <DialogForm sendMessage={props.sendMessage} />
            </div>
        </div>
    )
}

export default Dialogs
