import { Component, lazy } from 'react'
import { connect, Provider } from 'react-redux'
import { Route } from 'react-router'
import { BrowserRouter, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginContainer from './components/Login/LoginContainer'
import Nav from './components/Nav/Nav'
import ProfileContainer from './components/Profile/ProfileContainer'
import { initializeAPP } from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader'
import store from './redux/storeRedux'
import { withSuspense } from './hoc/withSuspense'

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const Music = lazy(() => import('./components/Music/Music'))
const SettingContainer = lazy(() => import('./components/Setting/SettingContainer'))
const News = lazy(() => import('./components/News/News'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))


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
          <Route path='/login' render={() => <LoginContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/News' render={withSuspense(News)} />
          <Route path='/music' render={withSuspense(Music)} />
          <Route path='/users' render={withSuspense(UsersContainer)} />
          <Route path='/setting' render={withSuspense(SettingContainer)} />
        </div>
      </div>
    )
  }
}

const MainApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  initialize: state.app.initialize
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeAPP })
)(App)

export default MainApp