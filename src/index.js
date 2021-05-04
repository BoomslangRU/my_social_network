import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { message: 'Hi, how are you?', likeCounter: 12 },
  { message: 'It\'s my first post', likeCounter: 15 }
]

let dialogs = [
  { id: 'id1', name: 'Alexander' },
  { id: 'id2', name: 'Anna' },
  { id: 'id3', name: 'Ivan' },
  { id: 'id4', name: 'Oleg' },
  { id: 'id5', name: 'Dmitriy' },
  { id: 'id6', name: 'Ekaterina' }
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you' },
  { id: 3, message: 'Yo' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
