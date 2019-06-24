import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import detailComponent from "./detail-page";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.data = "";
  }
  componentDidMount() {
    this.props.sortDescending();
  }
  render() {
    console.log(this.props.data);
    const renderData = this.props.data.map((value, index) => {
      return (
        <ul className="gridContainer">
          <li className="banner">
            <Link to={`/${value.id}`} >
              <img src={value.poster_path} />
            </Link>
          </li>
          <li className="title">{value.title}</li>
          <li className="caption">{value.tagline}</li>
        </ul>
      );
    });
    return <div className="movieTitles">{renderData}</div>;
  }
}
export default SearchResults;
