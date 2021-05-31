import * as axios from 'axios'
import s from './Users.module.css'
import userPhoto from '../../assets/images/users.png'
import React from 'react'

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render = () => {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className={s.usersItem}>
                        <div className={s.avatarItem}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={s.image} />
                            <div className={s.buttonItem}>
                                {u.followed
                                    ? <button className={s.button_follow} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
        </div>
    }
}

export default Users