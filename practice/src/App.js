import './App.css';

function App() {
  let Inputdata = "강아지";
// 리액트는 데이터 바인딩이 쉽다
// 태그 스타일은 객체형식으로 ex: {{color : 'blue', fontSize : '30px'}}
  return (
    <div className="App">
      <input type="text" id="one" />
      <input type="button" value="버튼"/>
      
      <p>이건친구야 {Inputdata}</p>
    </div>
  );
}

export default App;
