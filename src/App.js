import { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { Route } from 'react-router'
import { BrowserRouter, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginContainer from './components/Login/LoginContainer'
import Music from './components/Music/Music'
import Nav from './components/Nav/Nav'
import News from './components/News/News'
import ProfileContainer from './components/Profile/ProfileContainer'
import SettingContainer from './components/Setting/SettingContainer'
import UsersContainer from './components/Users/UsersContainer'
import { initializeAPP } from './redux/appReducer'
import Preloader from './components/common/preloader/preloader'
import store from './redux/storeRedux'


class App extends Component {
  componentDidMount() {
    this.props.initializeAPP()
  }
  render() {
    if (!this.props.initialize) {
      return <Preloader />
    }
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
          <Route path='/setting' render={() => <SettingContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialize: state.app.initialize
})


const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeAPP })
)(App)

const MainApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp