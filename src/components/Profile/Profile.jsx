import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts />
    </main>
  )
}

export default Profile