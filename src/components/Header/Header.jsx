import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='http://cdn.onlinewebfonts.com/svg/download_534424.png'></img>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header