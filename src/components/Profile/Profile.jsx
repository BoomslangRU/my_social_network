import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import './Profile.module.css'

const Profile = props => {
	return (
		<main>
			<ProfileInfo {...props} />
			<MyPostsContainer />
		</main>
	)
}

export default Profile