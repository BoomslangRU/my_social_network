import { NavLink } from 'react-router-dom'
import s from './Setting.module.css'

const Setting = (props) => {
const clickLogout = () => {
    props.logout()
}
    return (
        <div>
            <NavLink className={s.singOut} onClick={clickLogout} to={'/login'}>Sing Out</NavLink>
        </div>
    )
}

export default Setting