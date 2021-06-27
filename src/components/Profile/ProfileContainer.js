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
      userId = this.props.authorizedUserId
    }
    this.props.getProfile(userId)
    this.props.getTextStatus(userId)
  }
  render() {
    return (
      <Profile {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  usersStatus: state.profilePage.usersStatus,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth
})

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { getProfile, getTextStatus, updateTextStatus })
)(ProfileContainer)