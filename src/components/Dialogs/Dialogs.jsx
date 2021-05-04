import DialogItem from './DialogItem/DialogsItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

let dialogs = [
    { id: 'id1', name: 'Alexander' },
    { id: 'id2', name: 'Anna' },
    { id: 'id3', name: 'Ivan' },
    { id: 'id4', name: 'Oleg' },
    { id: 'id5', name: 'Dmitriy' },
    { id: 'id6', name: 'Ekaterina' }
]

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you' },
    { id: 3, message: 'Yo' }
]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
let messagesElements = messages.map(m => <Message message={m.message} />)

const Dialogs = () => {
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