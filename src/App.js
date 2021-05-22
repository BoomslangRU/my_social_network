import { Route } from 'react-router'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header'
import Music from './components/Music/Music'
import Nav from './components/Nav/Nav'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import Setting from './components/Setting/Setting'


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile
          store={props.store} />} />
        <Route path='/dialogs' render={() => <DialogsContainer
          store={props.store} />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/setting' render={() => <Setting />} />
      </div>
    </div>
  )
}

export default App
