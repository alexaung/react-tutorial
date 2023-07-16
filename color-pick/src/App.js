import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import ColorPicker from "./components/colorPicker/index.js";

const title = "Color Picker";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorPickerOptions: this.props.colorPickerOptions,
      initialSelectedColor: this.props.initialSelectedColor,
      selectedColor: this.props.initialSelectedColor || "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ selectedColor: e.target.style["backgroundColor"] });
  }

  render() {
    return (
      <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <img alt="" src={logo} className="logo" />
            <h4 id="app-title" data-testid="app-title" className="app-title">
              {title}
            </h4>
          </div>
        </nav>
        <ColorPicker
          handleClick={this.handleClick}
          colorPickerOptions={this.props.colorPickerOptions}
          initialSelectedColor={this.props.initialSelectedColor}
          selectedColor={this.state.selectedColor}
        />
      </div>
    );
  }
}

export default App;
