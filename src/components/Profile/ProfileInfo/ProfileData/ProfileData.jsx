import { Fragment } from 'react'
import s from '../ProfileInfo.module.css'
import notJob from '../../../../assets/images/notJob.png'
import job from '../../../../assets/images/job.png'
import ProfileStatus from '../ProfileStatus/ProfileStatus'


const ProfileInfo = props => {
	const Contact = ({ contactTitle, contactValue }) => {
		return <div className={s.contactsMe}>
			<b>{contactTitle} :</b>
			{contactValue
				? <a className={s.contactName} href={contactValue}>{contactValue}</a>
				: <span className={s.redTextNoInformation}>No information</span>}
		</div>
	}
	return <Fragment>
		<div className={s.description}>

			{/* Nickname  */}
			<div className={s.fullName}>{props.profile.fullName}
				{/* image job search status */}
				<img src={props.profile.lookingForAJob ? notJob : job}
					alt='status looking for work'
					title={props.profile.lookingForAJob ? 'looking for work' : 'not looking for work'} />
			</div>

			<ProfileStatus {...props} />

			{/* information about me */}
			{props.profile.aboutMe &&
				<div className={s.aboutMe}>
					<b>About Me: </b>{props.profile.aboutMe}
				</div>
			}

			{/* information about professional skills */}
			{props.profile.lookingForAJobDescription &&
				<div className={s.aboutMe}>
					<b>My professional skills:</b> {props.profile.lookingForAJobDescription}
				</div>
			}

			{/* information about contacts */}
			<div className={s.aboutMe}>
				<h2>Contacts: </h2>
				{Object.keys(props.profile.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
				})}
			</div>
		</div>
	</Fragment>
}

export default ProfileInfo