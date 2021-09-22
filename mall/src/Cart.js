import React, { useState } from 'react';
import { Table } from "react-bootstrap";
import { connect } from 'react-redux';
import './Cart.css';

function Cart(props){

    let [alertclose, alertclose_C] = useState(true);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((a, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.quan}</td>
                                    <td><button className="plusquan" onClick={()=>{props.dispatch({type : '증가'})}}>+</button><button className="minusquan" onClick={()=>{props.dispatch({type : '감소'})}}>-</button></td>
                                </tr>// 리덕스 데이터 수정법 props.dispatch({type : ???})
                            )
                        })
                    }
                </tbody>
            </Table>
            {
                alertclose === true
                ?(<div className="alert">
                    <p>지금 사면 20%세일</p>
                    <button className="closealert" onClick={()=>{alertclose_C(false)}}>닫기</button>
                </div>)
                :null
            }
        </div>
    )
}

function state를Props화(state){
    return{
        state : state.reducer
    }
}

export default connect(state를Props화)(Cart)

//export default Cart;