import "./App.css";
import "./default.css";
import { Navbar, Container,NavDropdown,Nav,Button } from "react-bootstrap";
import React, { useState } from 'react';
import axios from 'axios';
import data from './data.js';
import Detail from './Detail.js';

import {Link, Route, Switch} from 'react-router-dom';

function App() {
  let [shoes, shoes_c] = useState(data);
  let [stocknum, stocknum_c] = useState([11,12,13]);
  // export default 함수명 = 내보내기 받을 때는 import 임의명 from './경로'
  // export 보통 페이지 마지막에 옴, 페이지당 한번 밖에 쓸 수 없음

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">하늘맛 식품</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>{/* Switch는 중복되는 path중에 젤 위에것만 */}
      {/* Route는 HTML 내부의 내용을 갈아치워서 다른 페이지처럼 흉내내는 것일 뿐입니다. */}
        <Route exact path="/">{/* exact 정확한 경로만 입력할 때 나오게 하는 것 path /경로입력 */}
          <div className="jumbotron">
            <p className="greet">어서오세요~~</p>
            <p className="shopname">여기는 하늘맛 식품입니다!</p>
            <Button variant="primary">구매하러가기</Button>
          </div>
          <div className="container">
            <div className="row">
              {
                shoes.map((re, i) => {
                  return(
                    <Contents key={i} shoes={shoes[i]}/>
                  );
                })
              }
            </div>
          </div>
        </Route>


        <Route path="/:id">
              <Detail shoes={shoes} stocknum={stocknum} stocknum_c={stocknum_c}/>
              {/* 모듈화 */}
        </Route>
        {/* <Route path="/dd" component={Contents}></Route> 이런식으로 컴포넌트를 넣을 수도 있음 */}

      </Switch>

      <Button className="moreBtn" onClick={()=>{

        //axios.post() 는 서버로 보내기
        // 로딩중 UI
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
          shoes_c([...shoes, ...result.data ])
          // 로딩중 UI 삭제
        })//ajax 요청 성공시
        .catch(()=>{})//ajax 요청 실패시
      }}>더보기</Button>
    </div>
  );
}

function Contents(props){
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.shoes.id) + '.jpg'} alt="" />
      <h4>{props.shoes.title}</h4>
      <p>가격 : {props.shoes.price}원</p>
      <Link to={'/' + (props.shoes.id)} className="btn btn-danger">주문하러가기</Link>
    </div>
  );
}

export default App;
