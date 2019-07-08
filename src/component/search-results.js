import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import detailComponent from "./detail-page";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickStoreData } from './actions/actions';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.data = "";
  }
  componentDidMount() {
    console.log('omooookkkkkkk',this.props);
  }
  clickDetailsPage=(id)=>{
    this.props.clickStoreData(id);
  }
  render() {
    const {data} = this.props.data;
    const renderData = data.map((value, index) => {
      return (
        <ul className="gridContainer">
          <li className="banner">
            <Link to={`/${value.id}`} onClick={this.clickDetailsPage.bind(this, value.id)}>
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
// const mapDispatchToProps = () => 
//       bindActionCreators({ clickStoreData})

// export default connect(mapDispatchToProps) (SearchResults);
export default SearchResults;
