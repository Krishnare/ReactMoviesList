import React, { Component } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import "../src/styles/app.css";
import { connect } from "react-redux";
import data from "./data";
import SearchResults from "./component/search-results";
import detailComponent from "./component/detail-page";
import history from "./component/history";
import { bindActionCreators } from "redux";
import { requestApiData, clickStoreData, filteredFunc } from "./component/actions/actions";
// import {} from "react-router-redux";
import { routerReducer, routerMiddleware } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.jsonData = data;
    this.state = {
      show: false,
      searchValues: this.jsonData.data,
      genres: "",
      title: "",
      titleSelected: false,
      genresSelected: false,
      updatedList: {},
      textBoxValue: "",
      filterValue: {}
    };
    this.labelVal = "Title";
    this.titleList = "";
    this.genresList = "";
  }

  componentDidMount() {
    this.props.requestApiData();
  }
  sortDescending = labelVal => {
    const currentList = this.state.searchValues;
    this.setState({
      titleSelected: true
    });
    if (this.labelVal === "Title") {
      this.labelVal = "Title";
    } else {
      this.labelVal = "Genres";
    }
    this.titleList = currentList.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
    });
    this.props.filteredFunc(this.titleList);
    if (this.labelVal === "Genres") {
      this.genresList = currentList.sort((a, b) => {
        if (a.genres > b.genres) {
          return 1;
        }
        if (a.genres < b.genres) {
          return -1;
        }
      });
      this.setState({
        updatedList: this.genresList
      });
    }

    this.setState({
      updatedList: this.titleList
    });
  };

  handleChange = e => {
    let filterValue = e.target.value;
    this.setState({
      filterValue: filterValue
    });
  };
  submitSearchValues = () => {
    const searchVal = this.state.filterValue;
    let currentLists = this.state.updatedList;
    let sortedList = "";
    if (this.labelVal === "Title") {
      if (searchVal !== "") {
        sortedList = currentLists.filter(item => {
          return item.title.includes(searchVal);
        });
        this.setState({
          searchValues: sortedList
        });
      } else {
        this.setState({
          searchValues: this.jsonData.data
        });
      }
    } else {
      if (searchVal !== "") {
        sortedList = currentLists.filter(item => {
          return item.genres.includes(searchVal);
        });
        this.setState({
          searchValues: sortedList
        });
      } else {
        this.setState({
          searchValues: this.jsonData.data
        });
      }
    }
  };
  render() {
    const { response } = this.props.productReducer;
    return (
      <div className="App mainCont">
        <header className="searchBarContainer">
          <div className="search">
            <input
              type="text"
              id="search"
              onChange={this.handleChange}
              placeholder="Search..."
            />
            <button onClick={this.submitSearchValues}>Search</button>
            <button
              onClick={() => this.sortDescending((this.labelVal = "Genres"))}
            >
              Genres
            </button>
            <button
              onClick={() => this.sortDescending((this.labelVal = "Title"))}
            >
              Title
            </button>
          </div>
          <Router history={history}>
            <Switch>
              <Route path="/:id" component={detailComponent} />
              <SearchResults
                data={data}
                sortDescending={this.sortDescending}
                clickStoreData={this.props.clickStoreData}
              />
              <Route path="/" component={App} />
            </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productReducer: state.productReducer,
  params: [state.params],
  filteredTitle: state.filteredTitle,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, clickStoreData, filteredFunc}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
