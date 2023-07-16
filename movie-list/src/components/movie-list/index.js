import React, { Component } from "react";
import "./index.css";

export default class Movielist extends Component {
  state = {
    selectedYear: null,
    result: [],
    isLoading: false,
  };

  handleYearChange = (e) => {
    this.setState({ selectedYear: e.target.value });
  };

  onClick = () => {
    this.fetchData(this.state.selectedYear);
  };

  fetchData = async (year) => {
    try {
      this.setState({ isLoading: true });
      const response = await fetch(
        `https://jsonmock.hackerrank.com/api/movies?Year=${year}`
      );
      const data = await response.json();
      this.setState({
        result: data.data,
        isLoading: false,
      });
    } catch (error) {
      // Handle the error. Maybe update state with a errorMessage field?
      console.error(error);
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { selectedYear, result, isLoading } = this.state;

    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input
            type="number"
            className="large"
            placeholder="Enter Year eg 2015"
            data-testid="app-input"
            onBlur={this.handleYearChange}
          />
          <button
            className=""
            data-testid="submit-button"
            onClick={this.onClick}
            disabled={isLoading}
          >
            Search
          </button>
        </section>
        {selectedYear && result.length > 0 && (
          <ul className="mt-50 styled" data-testid="movieList">
            {result.map((movie) => (
              <li className="slide-up-fade-in py-10" key={movie.imdbID}>
                {movie.Title}
              </li>
            ))}
          </ul>
        )}
        {selectedYear && result.length === 0 && !isLoading && (
          <div className="mt-50 slide-up-fade-in" data-testid="no-result">
            No Movies found
          </div>
        )}
      </div>
    );
  }
}
