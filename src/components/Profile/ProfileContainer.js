import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfile, getTextStatus, updateTextStatus } from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { Component } from 'react'


class ProfileContainer extends Component {
  refreshProfile() {
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

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }
  
  render() {
    return (
      <Profile {...this.props} isOwner={!this.props.match.params.userId} />
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