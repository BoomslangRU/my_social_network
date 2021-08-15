import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logoAPP.png'

const Header = ({ isAuth, login }) => {
    return (
        <header className={s.header}>
            <NavLink to={'/main'}><img src={logo} alt='logo'></img></NavLink>
            <div className={s.loginBlock}>
                {isAuth ? <NavLink to={'/setting'}>{login}</NavLink> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header