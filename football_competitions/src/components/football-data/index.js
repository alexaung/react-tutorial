import React, { Component } from "react";
import "./index.css";
const classNames = require("classnames");

export default class FootballMatchesData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: null,
      fetchState: { status: "loading", fail: { status: false, reason: null } },
      currentYearMatches: { count: 0, meta: [] },
    };
  }

  getApiUrlWithYear = (year) =>
    `https://jsonmock.hackerrank.com/api/football_competitions?year=${year}`;

  handleFetch = async (year) => {
    try {
      const response = await fetch(this.getApiUrlWithYear(year));
      const match = await response.json();
      this.setState({
        fetchState: { status: "done", fail: { status: false, reason: null } },
        currentYearMatches: { count: match.total, meta: match.data },
      });
    } catch (error) {
      this.setState({
        fetchState: {
          status: "done",
          fail: { status: true, reason: error.message },
        },
      });
    }
  };

  handleYearSelection = (year) => () => {
    this.setState({
      selectedYear: year,
      fetchState: { status: "loading", fail: { status: false, reason: null } },
    });
    this.handleFetch(year);
  };

  render() {
    var years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
    const { selectedYear, currentYearMatches } = this.state;

    return (
      <div className="layout-row">
        <div className="section-title">Select Year</div>
        <ul className="sidebar" data-testid="year-list">
          {years.map((year, i) => {
            return (
              <li
                className={classNames({
                  "sidebar-item": true,
                  active: selectedYear === year,
                })}
                onClick={this.handleYearSelection(year)}
                key={year}
              >
                <a>{year}</a>
              </li>
            );
          })}
        </ul>

        <section className="content">
          {selectedYear && (
            <section>
              {currentYearMatches.meta.length > 0 ? (
                <>
                  <div className="total-matches" data-testid="total-matches">
                    Total matches: {currentYearMatches.meta.length}
                  </div>
                  <ul className="mr-20 matches styled" data-testid="match-list">
                    {currentYearMatches.meta.map((res, index) => {
                      return (
                        <li className="slide-up-fade-in" key={index + 1}>
                          Match {res.name} won by {res.winner}
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <div
                  data-testid="no-result"
                  className="slide-up-fade-in no-result"
                >
                  No Matches Found
                </div>
              )}
            </section>
          )}
        </section>
      </div>
    );
  }
}
