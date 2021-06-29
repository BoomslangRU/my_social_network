import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfile, getTextStatus, updateTextStatus } from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { Component } from 'react'


class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
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

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  usersStatus: state.profilePage.usersStatus,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth
})

export default compose(
  // withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { getProfile, getTextStatus, updateTextStatus })
)(ProfileContainer)