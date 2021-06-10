import Preloader from '../../common/preloader/preloader'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profileItems}>
            <div className={s.item}>
                <img src='https://www.campaignmonitor.com/wp-content/uploads/2010/12/background_d.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
            </div>
            <div className={s.description}>
                <div className={s.fullName}>{props.profile.fullName}</div>
                <div>lookingForAJobDescription:  {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}

export default ProfileInfo