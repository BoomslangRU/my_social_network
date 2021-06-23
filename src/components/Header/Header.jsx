import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo_header.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo}></img>
            <div className={s.loginBlock}>
                {props.isAuth ? <NavLink to={'/setting'}>{props.login}</NavLink> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header