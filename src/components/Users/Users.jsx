import s from './Users.module.css'
import userPhoto from '../../assets/images/users.png'
import { NavLink } from 'react-router-dom'


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
                            <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.button_follow}
                                onClick={() => {
                                    props.followUsers(u.id)
                                    // props.toggleFollowingProgress(true, u.id)
                                    // usersAPI.followUsers(u.id)
                                    //     .then(data => {
                                    //         if (data.resultCode === 0) {
                                    //             props.unfollow(u.id)
                                    //         }
                                    //         props.toggleFollowingProgress(false, u.id)
                                    //     })
                                    //     .catch(props.toggleFollowingProgress(false))
                                }} > Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.unfollowUsers(u.id)
                                    // props.toggleFollowingProgress(true, u.id)
                                    // usersAPI.unfollowUsers(u.id)
                                    //     .then(data => {
                                    //         if (data.resultCode === 0) {
                                    //             props.follow(u.id)
                                    //         }
                                    //         props.toggleFollowingProgress(false, u.id)
                                    //     })
                                    //     .catch(props.toggleFollowingProgress(false))
                                    // props.follow(u.id)
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