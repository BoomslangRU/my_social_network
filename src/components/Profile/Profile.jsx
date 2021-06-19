import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo profile={props.profile} usersStatus={props.usersStatus}
        updateTextStatus={props.updateTextStatus} />
      <MyPostsContainer />
    </main>
  )
}

export default Profile