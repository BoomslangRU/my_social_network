import './index.css'
import reportWebVitals from './reportWebVitals'
import state, { subscribe } from './redux/state'
import ReactDOM from 'react-dom'
import App from './App'
import { addPost, updateNewPostText } from './redux/state'
import { BrowserRouter } from 'react-router-dom'

export let renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>,
    document.getElementById('root'))
}

renderEntireTree()

subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
