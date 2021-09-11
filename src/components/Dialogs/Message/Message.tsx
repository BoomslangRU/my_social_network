import { FC } from 'react'
import s from './../Dialogs.module.css'

type propsType = {
    message: string
}

const Message: FC<propsType> = ({ message }) => {
    return <div className={s.message}>{message}</div>
}

export default Message