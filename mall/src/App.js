import "./App.css";
import { Navbar, Container,NavDropdown,Nav,Button } from "react-bootstrap";
import React, { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes, shoes_c] = useState(data);
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
    </div>
  );
}

function Contents(props){
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.shoes.id + '.jpg'} alt="" />
      <h4>{props.shoes.title}</h4>
      <p>가격 : {props.shoes.price}원</p>
    </div>
  );
}

export default App;
