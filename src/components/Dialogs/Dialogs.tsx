import DialogForm from './DialogForm/DialogForm'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import s from './Dialogs.module.css'
import { FC } from 'react'
import { initialStateDialogsPageType } from '../../redux/dialogsReducer'

type propsType = {
	sendMessage: (massageBody: string) => void
	dialogsPage: initialStateDialogsPageType
}

const Dialogs: FC<propsType> = ({ dialogsPage, sendMessage }) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogItem}>
				{dialogsPage.dialogs.map(d =>
					<DialogItem name={d.name} key={d.id} id={d.id} />)}
			</div>
			<div className={s.messages}>
				{dialogsPage.messages.map(m =>
					<Message message={m.message} key={m.id} />)}
				<DialogForm sendMessage={sendMessage} />
			</div>
		</div>
	)
}

export default Dialogs
