import React, { Component } from "react";
import "./index.css";
const classNames = require("classnames");

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedColor = this.props.selectedColor;

    return (
      <div>
        <div className="layout-row justify-content-center">
          <div className="card mt-75">
            <div
              className="canvas"
              data-testid="selectedColor"
              style={{
                backgroundColor: selectedColor,
              }}
            >
              <p className="text-center mx-auto px-5">{selectedColor}</p>
            </div>
            <div className="card-actions">
              <div
                className="layout-row justify-content-center align-items-center"
                data-testid="colorPickerOptions"
              >
                {this.props.colorPickerOptions.map((color, index) => {
                  return (
                    <div
                      style={{ backgroundColor: color }}
                      className={classNames({
                        "color-box": true,
                        "mx-8": true,
                        "my-15": true,
                        selected: selectedColor === color,
                      })}
                      onClick={this.props.handleClick}
                      key={index}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
