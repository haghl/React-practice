import React, { useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';

function Detail(props){

    let history = useHistory();//뒤로가기를 위해
    let {id} = useParams();
    let sameitem = props.shoes.find(idx => idx.id == id);
    console.log(sameitem);
    return(
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes' + (sameitem.id) + '.jpg'} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{sameitem.title}</h4>
            <p>{sameitem.content}</p>
            <p>{sameitem.price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button className="btn btn-danger" onClick={() => history.goBack()}>뒤로가기</button>
          </div>
        </div>
      </div> 
    );
}

export default Detail;