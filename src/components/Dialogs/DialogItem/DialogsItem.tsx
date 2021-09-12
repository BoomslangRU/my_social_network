import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

type propsType = {
	name: string
	id: string
}

const DialogItem: FC<propsType> = ({ name, id }) => {
	const path = '/dialogs/' + id

	return (
		<div className={s.dialog}>
			<NavLink to={path} activeClassName={s.activeLink}>{name}</NavLink>
		</div>
	)
}

export default DialogItem