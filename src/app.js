import React, { Component } from "react";
// import logo from './logo.svg';
import "../src/styles/app.css";
import data from "./data";
import SearchResults from "./component/search-results";

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
      textBoxValue: ""
    };
    this.labelVal = "Title";
    this.titleList = "";
    this.genresList = "";
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
    let newList = "";
    const currentLists = this.state.updatedList;
    if (this.labelVal === "Title") {
      if (e.target.value !== "") {
        newList = currentLists.filter(item => {
          const filterValue = e.target.value;
          return item.title.includes(filterValue);
        });
      } else {
        newList = this.jsonData.data;
      }
    } else {
      if (e.target.value !== "") {
        newList = currentLists.filter(item => {
          const filterValue = e.target.value;
          return item.title.includes(filterValue);
        });
      } else {
        newList = this.jsonData.data;
      }
    }
    this.setState({
      searchValues: newList
    });
  };
  hoverDownMenu = () => {
    this.setState({
      show: false
    });
  };
  render() {
    const data = this.state.searchValues;
    console.log(data);

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
            <button onClick={this.handleChange}>Search</button>
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
          <SearchResults data={data} sortDescending={this.sortDescending} />
        </header>
      </div>
    );
  }
}

export default App;
