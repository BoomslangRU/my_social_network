import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </main>
  )
}

export default Profile