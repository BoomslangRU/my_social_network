import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        usersStatus: this.props.usersStatus
    }
    onStatusChange = (e) => {
        this.setState({
            usersStatus: e.currentTarget.value
        })
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateTextStatus(this.state.usersStatus)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.usersStatus !== this.props.usersStatus) {
            this.setState({
                usersStatus: this.props.status
            })
        }
    }
    render() {
        return (
            <div className={s.statusItems}>
                {!this.state.editMode ?
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.usersStatus || 'No Status'} </span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true}
                            onBlur={this.deactivateEditMode} value={this.state.usersStatus} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus