import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <main>
      <ProfileInfo />
      <MyPostsContainer />
    </main>
  )
}

export default Profile