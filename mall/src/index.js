import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';// 라우팅을 리액트가 아닌 서버로 요청할 수도 있음 서버와 협업을 하여 쓰면 좋음
// import {HashRouter} from 'react-router-dom'; 주소창에 #뒤에 오는 것을 서버로 전달 하지 않음 안전하게 할 수 있음


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
