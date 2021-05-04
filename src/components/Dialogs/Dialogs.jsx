import DialogItem from './DialogItem/DialogsItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs