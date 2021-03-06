import { functions } from 'lodash';
import React, {useState} from 'react';
import './App.css';
import './default.css';

function App() {
  // 리액트는 데이터 바인딩이 쉽다
  // 태그 스타일은 객체형식으로 ex: {{color : 'blue', fontSize : '30px'}}
  //let d_day = "한우 등심";

  let [추천, 추천변경] = useState(['소고기','생선','야채']);// 자주 변하는 중요한 데이터들을 새로고침 없이 재랜더링 가능케하는 State
  let [goodNum, goodNum_C] = useState(0);
  let [개별모달, 개별모달_C] = useState(0);
  let [onoff, onoff_C] = useState(false);
  let [inputvalue, inputvalue_C] = useState('');

  function changetit(){
    let newArray = [...추천];
    newArray[0] = '돼지고기';
    추천변경(newArray);
  }// state 변경 시에는 보통 deepcopy후에 안에 내용을 변경함

  function pushtit(){
    let newArray = [...추천];
    newArray.unshift(inputvalue);
    추천변경(newArray);
  }

  return (
    <div className="App">
      <header>
          <h1 className="logo">리액트 연습</h1>
      </header>
      {/* <input type="text" onChange={(e)=>inputvalue_C(e.target.value)} /> */}
      <button onClick={changetit}>BTN</button>
      <main>
        <div className="list">
          <h2>오늘은 {추천[0]} <span onClick={()=>goodNum_C(goodNum+1)}>good</span> {goodNum}</h2>
          <p>날짜: 2021.08.30</p>
          <hr/>
        </div>
        <div className="list">
          <h2>오늘은 {추천[1]}</h2>
          <p>날짜: 2021.08.30</p>
          <hr/>
        </div>
        
        <div className="list">
          <h2>
            오늘은 {추천[2]}<button className="modal_Btn" onClick={() => {onoff_C(!onoff)}}></button> 
          </h2>
          <p>날짜: 2021.08.30</p>
          <hr/>
        </div>
      </main>

      <div className="inputbox">
        <input type="text" onChange={(e)=>inputvalue_C(e.target.value)} />
        <button onClick={()=>{pushtit()}}>발행</button>
      </div>

      {
        onoff === true
        ? <Modal 추천 = {추천} 개별모달 = {개별모달} onoff_C = {onoff_C}></Modal>// props: 부모 state를 자식 state에게 보내는 방법 컴포넌트 옆에 이름 = {state명}
        : null
      }

      {
        // 반복문 map() 배열 안 데이터 수만큼 리턴해줌 each랑 비슷
        추천.map((re, i)=>{
          return (
            <div className="list" key={i}>
            <h2>오늘은 {re} <span onClick={() => {
              onoff_C(true);
              개별모달_C(i);
            }}>good</span></h2>
            <p>날짜: 2021.08.30</p>
            <hr/>
          </div>
          );
        })
      }

    </div>
  );
}

// component로 만들면 좋은 것은 반복 출현 하는 html / 자주변경되는 html UI 들
// 단점 -state 쓸 때 복잡
function Modal(props){//component 함수 이름은 항상 대문자/ 축약해서 넣을 수 있음 
  return(// return 안에 div(body 같은 느낌)는 하나만 가능 
    <div className="modal">
      <div className="modal_in">
        <button className="modal_close" onClick={() => props.onoff_C(false)}>X</button>
        <h2>광고</h2>
        <p>오세요 오세요~ {props.추천[props.개별모달]}가 싸요!</p>
        <p className="today">날짜: 21.08.31</p>
      </div>
    </div>
  );
}

export default App;
