import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
  return (
    <main className = {s.item__main}>
      <div className = {s.item}>
        <img src='https://www.campaignmonitor.com/wp-content/uploads/2010/12/background_d.jpg'></img>
      </div>
      <div>
        ava + description
        </div>
      <MyPosts />
    </main>
  )
}

export default Profile