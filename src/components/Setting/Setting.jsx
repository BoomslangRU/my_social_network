import { NavLink } from 'react-router-dom'
import s from './Setting.module.css'
import logout_image from '../../assets/images/logout.png'

const Setting = ({ logout }) => {
    const clickLogout = () => {
        logout()
    }
    return (
        <div className={s.singOut}>
            <img src={logout_image}></img>
            <NavLink onClick={clickLogout} to={'/login'}>Sing Out</NavLink>
        </div>
    )
}

export default Setting