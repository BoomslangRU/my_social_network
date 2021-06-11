import Preloader from '../../common/preloader/preloader'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/users.png'
import notJob from '../../../assets/images/notJob.png'
import job from '../../../assets/images/job.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    debugger
    return (
        <div className={s.profileItems}>
            <div className={s.item}>
                <img src='https://www.campaignmonitor.com/wp-content/uploads/2010/12/background_d.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
            </div>
            <div className={s.description}>
                <div className={s.fullName}>{props.profile.fullName}
                    <img src={props.profile.lookingForAJob == true ? job : notJob} title='Looking for a job?' /></div>
                <div className={s.aboutMe}>{props.profile.aboutMe}</div>
                {/* <div> Looking For AJob Description:  {props.profile.lookingForAJobDescription}</div> */}
            </div>
        </div>
    )
}

export default ProfileInfo