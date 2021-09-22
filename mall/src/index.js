import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';// 라우팅을 리액트가 아닌 서버로 요청할 수도 있음 서버와 협업을 하여 쓰면 좋음
// import {HashRouter} from 'react-router-dom'; 주소창에 #뒤에 오는 것을 서버로 전달 하지 않음 안전하게 할 수 있음

import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';

let baseState = [
  {id : 0, name : '굿슈즈', quan : 2}
];

function reducer(state = baseState, action){
  if(action.type === '증가'){

    let copystate = [...state];
    copystate[0].quan++;

    return copystate
  } else if(action.type === '감소'){
    let copystate = [...state];
    if(copystate[0].quan == 0){
      copystate[0].quan = 0
    }else {
      copystate[0].quan--;
    }
    return copystate
  }else {
    return state
  }

}
let store = createStore(combineReducers({reducer}));// 리덕스 스테이트 공유법 여러 개 합치는 법 combineReducer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
