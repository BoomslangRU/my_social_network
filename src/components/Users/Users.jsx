import s from './Users.module.css'
import userPhoto from '../../assets/images/users.png'
import { NavLink } from 'react-router-dom'
import { followUsers, unfollowUsers } from '../../api/api'


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    if (pagesCount > 9) {
        if (props.currentPage > 5) {
            for (let i = props.currentPage - 4; i <= props.currentPage + 4; i++) {
                pages.push(i)
                if (i === pagesCount) break
            }
        } else {
            for (let i = 1; i <= 9; i++) {
                pages.push(i)
                if (i === pagesCount) break
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }


    return <div>
        <div className={s.selectedPage}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.activeSelectedPage}
                    key={p.id} onClick={() => { props.onPageChanged(p) }} >{p} </span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <div className={s.usersItem}>
                <div className={s.avatarItem}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                            className={s.image} />
                    </NavLink>
                    <div className={s.buttonItem}>
                        {u.followed ?
                            <button className={s.button_follow} onClick={() => {
                                followUsers(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }} > Unfollow</button>

                            : <button onClick={() => {
                                unfollowUsers(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div className={s.infoItem}>
                    <div className={s.name}>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div className={s.locationItem}>
                    <div>{'u.country'}</div>
                    <div>{'u.city'}</div>
                </div>
            </div>
        </div>
        )
        }
    </div >
}

export default Users