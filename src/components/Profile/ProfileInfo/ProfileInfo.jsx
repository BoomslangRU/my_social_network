import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/users.png'
import background from '../../../assets/images/background.jpg'
import styleInput from '../../../styles/styleInputFile.module.css'
import styleButton from '../../../styles/styleButton.module.css'
import ProfileData from './ProfileData/ProfileData'
import { useState } from 'react'
import ProfileDataForm from './ProfileData/ProfileDataForm'

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    const onManePhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const goToEditMode = () => {
        setEditMode(true)
    }
    const exitToEditMode = () => {
        setEditMode(false)
    }

    if (!props.profile) {
        return <Preloader />
    }
    return <div className={s.profileItems}>

        {/* image background profile  */}
        <div className={s.item}>
            <img src={background}></img>
        </div>
        <div className={s.descriptionBlock} >

            {/* image avatar profile */}
            <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} />

            {/* input file for loading image avatar profile */}
            <div className={s.ownerItem}>
                {!props.isOwner && <input className={styleInput} type={'file'} onChange={onManePhotoSelected} />}
            </div>

            {/* button for edit profile */}
            <div className={styleButton.buttonBlock}>
                {!props.isOwner && <button onClick={goToEditMode}><span>edit profile</span></button>}
            </div>

        </div>

        {/* edit mode */}
        <div>
            {editMode
                ? <ProfileDataForm {...props} exitToEditMode={exitToEditMode} />
                : <ProfileData {...props} />}
        </div>
    </div>
}


export default ProfileInfo