import { useState } from 'react'
import s from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [usersStatus, setUsersStatus] = useState(props.usersStatus)

    const onStatusChange = (e) => {
        setUsersStatus(e.currentTarget.value)
    }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateTextStatus(usersStatus)
    }

        return (
            <div className={s.statusItems}>
                {!editMode ?
                    <div>
                        <span onClick={activateEditMode}>{usersStatus || 'No Status'} </span>
                    </div>
                    :
                    <div>
                        <input onChange={onStatusChange} autoFocus={true}
                            onBlur={deactivateEditMode} value={usersStatus} />
                    </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks