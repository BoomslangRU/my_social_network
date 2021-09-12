import { Form, Field } from 'react-final-form'
import Preloader from '../../../common/Preloader/Preloader'
import s from '../ProfileInfo.module.css'
import styleForm from './ProfileDataForm.module.css'
import styleButton from '../../../../styles/styleButton.module.css'
import { useState } from 'react'


const ProfileDataForm = props => {

	const [messageError, setMessageError] = useState(null)

	const onSubmit = (e) => {
		props.saveProfile(e)
			.then(() => {
				props.exitToEditMode()
			}
			)
			.catch((response) => {
				setMessageError(response)
			}
			)
	}

	const validate = (e) => {
		const errors = {}
		if (!e.fullName && !props.profile.fullName) {
			errors.fullName = 'Required'
		}
		if (e.fullName && e.fullName.length > 20) {
			errors.fullName = 'Nickname must not exceed 10 characters'
		}
		return errors
	}

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<Form onSubmit={onSubmit}
			initialValues={props.profile}
			validate={validate}
			render={({ handleSubmit }) => (
				<form className={s.railway} onSubmit={handleSubmit}>
					<div className={styleForm.description}>

						{/* input Nickname */}
						<div className={styleForm.formRow}>
							<Field name='fullName'
								render={({ input, meta }) => (
									<div>
										<b>Your Nickname?</b>
										<input {...input} type='text' />
										{meta.touched && (meta.error || meta.submitError)
											&& <div className={styleForm.error}>{meta.error || meta.submitError}</div>}
									</div>
								)}
							/>
						</div>

						{/* checkbox looking for a job */}
						<div className={styleForm.checkbox}>
							<b>Looking for a job?</b>
							<Field
								name='lookingForAJob'
								component='input'
								type='checkbox'
							/>
						</div>

						{/* input abut me */}
						<div className={styleForm.formRow}>
							<Field name='aboutMe'
								render={({ input, meta }) => (
									<div>
										<b>About Me: </b> <input {...input} type='text' />
										{meta.touched && (meta.error || meta.submitError)
											&& <div className={s.error}>{meta.error || meta.submitError}</div>}
									</div>
								)}
							/>
						</div>

						{/* input professional skills */}
						<div className={styleForm.formRow}>
							<Field name='lookingForAJobDescription'
								render={({ input, meta }) => (
									<div>
										<b>My professional skills:</b> <input {...input} type='text' />
										{meta.touched && (meta.error || meta.submitError)
											&& <div className={s.error}>{meta.error || meta.submitError}</div>}
									</div>
								)}
							/>
						</div>

						{/* information contacts */}
						<div className={styleForm.formRow}>
							<h2>Contacts: </h2> {Object.keys(props.profile.contacts).map(key => {
								return <div key={key}>
									<div className={styleForm.formRow}>
										<Field name={'contacts.' + key}
											render={({ input, meta }) => (
												<div>
													<b>{key}:</b> <input  {...input} type='text' />
													{meta.touched && (meta.error || meta.submitError)
														&& <div className={s.error}>{meta.error || meta.submitError}</div>}
												</div>
											)}
										/>
									</div>
								</div>
							})}
						</div>
						<div className={styleForm.errorMessage}>
							{messageError}
						</div>
						<div className={styleButton.buttonBlock}>
							<button type='saveProfile' >save profile</button>
						</div>
					</div>
				</form >
			)}
		/>
	)
}

export default ProfileDataForm