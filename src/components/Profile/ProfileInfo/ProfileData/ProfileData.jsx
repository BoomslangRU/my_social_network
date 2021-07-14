import s from '../ProfileInfo.module.css'
import notJob from '../../../../assets/images/notJob.png'
import job from '../../../../assets/images/job.png'
import ProfileStatus from '../ProfileStatus/ProfileStatus'


const ProfileInfo = (props) => {

    const Contact = ({ contactTitle, contactValue }) => {
        return <div className={s.contactsMe}>
            <b>{contactTitle} :</b>
            <span className={s.addFont}>{contactValue ? contactValue : 'No information'}</span>
        </div>
    }

    return <div>
        <div className={s.description}>

            {/* Nickname  */}
            <div className={s.fullName}>{props.profile.fullName}
                {/* image job search status */}
                <img src={props.profile.lookingForAJob ? notJob : job}
                    title={props.profile.lookingForAJob ? 'looking for work' : 'not looking for work'} />
            </div>

            <ProfileStatus {...props} />

            {/* information about me */}
            <div className={s.aboutMe}>
                <b>About Me: </b>{props.profile.aboutMe}
            </div>

            {/* information about professional skills */}
            {props.profile.lookingForAJobDescription &&
                <div className={s.aboutMe}>
                    <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
                </div>}

            {/* information about contacts */}
            <div className={s.aboutMe}>
                <b>Contacts: </b>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>
    </div>
}

export default ProfileInfo