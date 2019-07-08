import React, { Component } from "react";
import store from '../store';
// import data from "./data";

class detailComponent extends Component {
  constructor({ match }) {
    super();
    this.paramVal = match;
    this.fetchedData = "";
    this.state = {
      productResponse: ""
    };
  }
  render() { 
   const state = store.getState();
    console.log('......', state);
    let detailData = state.productReducer.params;
    if(!isNaN(detailData)){
      detailData="";
    }else{
      detailData = state.productReducer.params;
    }
    // if(!detailData.budget){
    //   detailData="";
    // }else{
    //   detailData = state.productReducer.params;
    // }
    console.log(detailData);
    return (
      <div>
        <ul>
          <li>
            <img className="" src={detailData.poster_path} />
          </li>
          <li>{detailData.id}</li>
        </ul>
      </div>
    );
  }
}

export default detailComponent;
