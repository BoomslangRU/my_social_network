import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/users.png'
import notJob from '../../../assets/images/notJob.png'
import job from '../../../assets/images/job.png'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import background from '../../../assets/images/background.jpg'
import styleInput from '../../../styles/styleInputFile.module.css'
import styleButton from '../../../styles/styleButton.module.css'

const ProfileInfo = (props) => {
    const onManePhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onClickEditMode = (e) => {

    }

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileItems}>
            <div className={s.item}>
                <img src={background}></img>
            </div>
            <div className={s.descriptionBlock} >
                <img src={!!props.profile.photos.large ? props.profile.photos.large : userPhoto} />
                <div className={s.ownerItem}>
                    {!props.isOwner && <input className={styleInput} type={'file'} onChange={onManePhotoSelected} />}
                </div>
                <div className={styleButton.buttonBlock}>
                    {!props.isOwner && <button onChange={onClickEditMode} type='submit'><span>edit profile</span></button>}
                </div>

            </div>
            <div className={s.description}>
                <div className={s.fullName}>{props.profile.fullName}
                    <img src={props.profile.lookingForAJob ? notJob : job}
                        title={props.profile.lookingForAJob ? 'looking for work' : 'not looking for work'} />
                </div>
                <ProfileStatus {...props} />
                <div className={s.aboutMe}><b>About Me: </b>{props.profile.aboutMe}</div>
                {props.profile.lookingForAJobDescription && <div className={s.aboutMe}><b>My professional skills:</b> {props.profile.lookingForAJobDescription}</div>}
                <div className={s.aboutMe}>
                    <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                    })} </div>
            </div>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contactsMe}><b>{contactTitle} :</b> <span className={s.addFont}>{contactValue ? contactValue : 'No information'}</span></div>
}

export default ProfileInfo