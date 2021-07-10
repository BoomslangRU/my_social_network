import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/users.png'
import notJob from '../../../assets/images/notJob.png'
import job from '../../../assets/images/job.png'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import background from '../../../assets/images/background.jpg'
import styleInput from '../../../styles/styleInputFile.module.css'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileItems}>
            <div className={s.item}>
                <img src={background}></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
            </div>
            <div className={s.ownerItem}>
                {props.isOwner && <input className={styleInput} type={'file'} />}
            </div>
            <div className={s.description}>
                <div className={s.fullName}>{props.profile.fullName}
                    <img src={props.profile.lookingForAJob ? notJob : job}
                        title={props.profile.lookingForAJob ? 'looking for work' : 'not looking for work'} />
                </div>
                <ProfileStatus {...props} />
                <div className={s.aboutMe}>{props.profile.aboutMe}</div>
                {/* <div> Looking For AJob Description:  {props.profile.lookingForAJobDescription}</div> */}
            </div>
        </div>
    )
}

export default ProfileInfo