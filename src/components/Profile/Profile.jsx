import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  debugger
  return (
    <main>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </main>
  )
}

export default Profile