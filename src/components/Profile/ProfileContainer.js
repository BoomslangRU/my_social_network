import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfile, getTextStatus, updateTextStatus } from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '14657'
    }
    this.props.getProfile(userId)
    this.props.getTextStatus(userId)
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} usersStatus={this.props.usersStatus}
        updateTextStatus={this.props.updateTextStatus} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  usersStatus: state.profilePage.usersStatus
})

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { getProfile, getTextStatus, updateTextStatus })
)(ProfileContainer)