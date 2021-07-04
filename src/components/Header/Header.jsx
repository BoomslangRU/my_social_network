import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo_header.png'

const Header = ({ isAuth, login }) => {
    return (
        <header className={s.header}>
            <img src={logo}></img>
            <div className={s.loginBlock}>
                {isAuth ? <NavLink to={'/setting'}>{login}</NavLink> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header