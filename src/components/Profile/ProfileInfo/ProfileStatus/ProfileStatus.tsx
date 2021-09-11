import { useState, useEffect, FC } from 'react'
import s from './ProfileStatus.module.css'

type propsType = {
    usersStatus: string
    updateTextStatus: any
}

const ProfileStatus: FC<propsType> = props => {
    const [editMode, setEditMode] = useState(false)
    const [usersStatus, setUsersStatus] = useState(props.usersStatus)

    useEffect(() => {
        setUsersStatus(props.usersStatus)
    }, [props.usersStatus])

    const onStatusChange = (e: any) => {
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

export default ProfileStatus