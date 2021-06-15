import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo profile={props.profile} isAuth={props.isAuth} />
      <MyPostsContainer />
    </main>
  )
}

export default Profile