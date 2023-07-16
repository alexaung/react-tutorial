import React, { Component } from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {

  constructor() {
    super()
    this.state = {
      parameterState: ""
    }
  }

  handleSortBy = (param) => {
    this.setState({
      parameterState: param
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter sortBy={this.handleSortBy} ></Filter>
        <RecordTable sortedItems={this.state.parameterState}></RecordTable>
      </div>
    );
  }
}

export default App;
