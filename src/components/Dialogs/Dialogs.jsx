import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem name='Alexander' id='id1' />
                <DialogItem name='Anna' id='id2' />
                <DialogItem name='Ivan' id='id3' />
                <DialogItem name='Oleg' id='id4' />
                <DialogItem name='Dmitriy' id='id5' />
                <DialogItem name='Ekaterina' id='id6' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message='Yo' />
            </div>
        </div>
    )
}

export default Dialogs