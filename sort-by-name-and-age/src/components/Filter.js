import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";

class Filter extends Component {
  state = {
    checkedVal: "",
  };
  onChange = (event) => {
    let value = "";
    if (event.target === undefined) {
      //this will handle these guys tests issues since they are directly parsing the value
      value = event;
    } else {
      value = event.target.value;
    }

    this.setState({
      checkedVal: value,
    });
    this.props.sortBy(value);
  };

  render() {
    return (
      <div className="checkboxes">
        <Checkbox
          checked={this.state.checkedVal === "name"}
          value="name"
          onChange={this.onChange}
        />
        <label>Name</label>
        <Checkbox
          checked={this.state.checkedVal === "age"}
          value="age"
          onChange={this.onChange}
        />
        <label>Age</label>
      </div>
    );
  }
}

//PropTypes
Filter.propTypes = {
  sortBy: PropTypes.func.isRequired,
};
export default Filter;
