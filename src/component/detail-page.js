import React, { Component } from "react";
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

  componentDidMount() {
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${this.paramVal.params.id}`)
      .then(res => res.json())
      .then(response => {
        JSON.stringify(response);
        this.setState({ productResponse: response });
      })
      .catch(function() {
        console.log("error");
      });
  }
  render() {
    let detailPorduct = this.state.productResponse;

    return (
      <div>
        <ul>
          <li>
            <img src={detailPorduct.poster_path} />
          </li>
          <li>{detailPorduct.id}</li>
        </ul>
      </div>
    );
  }
}
export default detailComponent;
