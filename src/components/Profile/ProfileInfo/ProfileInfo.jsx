import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://www.campaignmonitor.com/wp-content/uploads/2010/12/background_d.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo