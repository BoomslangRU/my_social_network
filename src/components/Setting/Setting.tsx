import { NavLink } from 'react-router-dom'
import s from './Setting.module.css'
import logout_image from '../../assets/images/logout.png'
import { FC } from 'react'

type propsType = {
    logout: any
}

const Setting: FC<propsType> = ({ logout }) => {
    const clickLogout = () => {
        logout()
    }
    return (
        <div className={s.singOut}>
            <img alt='logout' src={logout_image}  ></img>
            <NavLink onClick={clickLogout} to={'/login'}>Sing Out</NavLink>
        </div>
    )
}

export default Setting