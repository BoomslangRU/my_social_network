import s from './Users.module.css'
import userPhoto from '../../assets/images/users.png'
import { NavLink } from 'react-router-dom'


const User = ({ user, followingInProgress, followUsers, unfollowUsers }) => {
    return <div>
        <div className={s.usersItem}>
            <div className={s.avatarItem}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                        className={s.image} alt='user' />
                </NavLink>
                <div className={s.buttonItem}>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)} className={s.button_follow}
                            onClick={() => {
                                followUsers(user.id)
                            }} > Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollowUsers(user.id)
                            }}>Follow</button>}
                </div>
            </div>
            <div className={s.infoItem}>
                <div className={s.name}>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div className={s.locationItem}>
                <div>{'u.country'}</div>
                <div>{'u.city'}</div>
            </div>
        </div>
    </div>
}

export default User