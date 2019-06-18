import React, { Component } from "react";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.data = "";
  }

  componentDidMount() {
    this.props.sortDescending();
  }
  render() {
    console.log(this.props.data, "jhhjhjhjhjhjhj");
    const renderData = this.props.data.map((value, index) => {
      return (
        <ul className="gridContainer">
          <li className="banner">
            <img src={value.poster_path} />
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
