import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { addPost } from './redux/state'
import { BrowserRouter } from 'react-router-dom'

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root'))
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()