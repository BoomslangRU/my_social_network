import s from './Users.module.css'

const Users = (props) => {
    // Temporary solution
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://www.kino-teatr.ru/acter/photo/9/6/285169/824299.jpg',
                followed: true, fullName: 'Alexander', status: 'I am a BOSS',
                location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 2, photoUrl: 'https://vsefz.ru/wp-content/uploads/2019/06/ASem-4.jpg',
                followed: true, fullName: 'Anna', status: 'I am a BOSS too',
                location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 3, photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5718a873638623.5c101d92c0531.jpg',
                followed: false, fullName: 'Ivan', status: 'I am a little BOSS',
                location: { city: 'Bryansk', country: 'Russia' }
            }
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.usersItem}>
                    <div className={s.avatarItem}>
                        <img src={u.photoUrl} className={s.image} />
                        <div className={s.buttonItem}>
                            {u.followed
                                ? <button className={s.button_follow} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </div>
                        <div className={s.infoItem}>
                            <div className={s.name}>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.locationItem}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                </div>
            </div>
            )
        }
    </div>
}

export default Users