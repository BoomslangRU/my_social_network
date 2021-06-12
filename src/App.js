import { Route } from 'react-router'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Music from './components/Music/Music'
import Nav from './components/Nav/Nav'
import News from './components/News/News'
import ProfileContainer from './components/Profile/ProfileContainer'
import Setting from './components/Setting/Setting'
import UsersContainer from './components/Users/UsersContainer'


const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/setting' render={() => <Setting />} />
      </div>
    </div>
  )
}

export default App
