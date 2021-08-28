import logo from './logo.svg';
import './App.css';
import './reset.css';
import React, { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['강아지', '고양이', '고슴도치']);
  let [누른제목, 누른제목변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>애완동물</h1>
      </header>
      <main>
        {
          글제목.map((a, i) => {
            return (
              <div>
                <h2 onClick = {() => {스위치변경(!스위치); 누른제목변경(i);}}>{a}</h2>
                <p>내용</p>
                <p>2021.05.12</p>
                <hr/>
              </div>
              )
          })
        }

        {
          스위치 === true
          ? <Modal 글제목 = {글제목} 누른제목 = {누른제목}></Modal>
          : null
        }
      </main>
    </div>
  );
}

function Modal(props){
  return(
    <div className = "modal">
      <h3>{props.글제목[props.누른제목]}</h3>
      <p>내용</p>
    </div>
  )
}

export default App;
