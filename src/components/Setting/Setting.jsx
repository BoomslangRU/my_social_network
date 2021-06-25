import { NavLink, Redirect } from 'react-router-dom'
import s from './Setting.module.css'
import logout from '../../assets/images/logout.png'

const Setting = (props) => {
const clickLogout = () => {
    props.logout()
}

// if (!props.isAuth) {
//     return <Redirect to={'/login'} />
// } 
    return (
        <div className={s.singOut}>
            <img src={logout}></img>
            <NavLink onClick={clickLogout} to={'/login'}>Sing Out</NavLink>
        </div>
    )
}

export default Setting