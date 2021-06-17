import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }
    render() {
        return (
            <div className={s.statusItems}>
                {!this.state.editMode ?
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus