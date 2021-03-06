import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { Nav } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import {CSSTransition} from "react-transition-group";
//import styled from 'styled-components';
import './detail.scss';

// let divbox = styled.div` 
//   width : 100%;
//   height : 100px;
//   padding : 20px;
//   border-radious : 10px;
//   background : orange;
//   `; 스타일을 component를 만듬/ 편의성은 적어보임

function Detail(props){
  let [alert, alert_C] = useState(true);
  // useEffect는 컴포넌트 등장/업뎃시 실행 여러개 사용 가능 위에서 부터 실행/ [] 안에 조건 빈 대괄호 일때는 한번만 실행
    useEffect(()=>{
      let timer = setTimeout(() => {
        // 페이지 이동 몇초 후 사라지는 함수
        // let Alert = document.querySelector('.alert');
        // Alert.style.display = 'none';
        
        alert_C(false);
      }, 2000);
      // 페이지가 사라질 때 실행 되는 함수
      return () => {clearTimeout(timer)} // setTimeOut 해제하는게 버그가 덜함
    }, [alert]);

    function changeStock(){
      let newArray = [...props.stocknum];
      newArray[0] = newArray[0] - 1;
      props.stocknum_c(newArray);
      
      if(newArray[0] < 0){
        newArray[0] = 0;
      }
    }

    let [nowtab,nowtab_c] = useState(0);
    let [switchtab ,switchtab_c] = useState(false);
    let history = useHistory();//뒤로가기를 위해
    let {id} = useParams();
    let sameitem = props.shoes.find(idx => idx.id == id);
    
    let state = useSelector((state)=> state);
    let dispatch = useDispatch();
    return(
        <div className="container">
          
          {
            alert === true
            ? (<div className="alert">
                <p>파격 세일 중 지금 구매하세요~!</p>
              </div>)
            : null
          }

          <div className="row">
            <div className="col-md-6">
              <img src={'https://codingapple1.github.io/shop/shoes' + (sameitem.id) + '.jpg'} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{sameitem.title}</h4>
              <p>{sameitem.content}</p>
              <p>{sameitem.price}</p>
              <Stock stocknum={props.stocknum}></Stock>
              <button className="btn btn-danger" onClick={() => {
                changeStock();
                dispatch({type : '항목추가', payload : {id : sameitem.id, name : sameitem.title, quan : 1}});
                history.push('/mycart');
                }}>주문하기</button>
              <button className="btn btn-danger" onClick={() => history.goBack()}>뒤로가기</button>
            </div>
          </div>
            <Nav variant="tabs" defaultActiveKey="link-0">
              <Nav.Item>
                <Nav.Link eventKey="link-0" onClick={()=>{switchtab_c(false); nowtab_c(0);}}>Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>{switchtab_c(false); nowtab_c(1);}}>Option 2</Nav.Link>
              </Nav.Item>
            </Nav>

            <CSSTransition in={switchtab} classNames="wow" timeout={500}>
              <Tabcont nowtab = {nowtab} switchtab_c = {switchtab_c}/>
            </CSSTransition>
      </div> 
    );
}

function Tabcont(props){
  useEffect(()=>{
    props.switchtab_c(true);
  })

  switch(props.nowtab){
    case 0:
      return <div>1번 페이지</div>;
      break;
    case 1:
      return <div>2번 페이지</div>;
      break;
    default:
      return <div>잘못 눌렀습니다.</div>;
  }
}

function Stock(props){
  return(
    <p>재고: {props.stocknum[0]}</p>
  )
}

export default Detail;