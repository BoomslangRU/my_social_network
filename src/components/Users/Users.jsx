import s from './Users.module.css'

const Users = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.usersItem}>
                    <div className={s.avatarItem}>
                        <img src={u.photoUrl} className={s.image} />
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.follow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.unfollow(u.id) }}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.infoBlock}>
                        <div className={s.infoItem}>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.locationItem}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    </div>
}

export default Users