import React from "react";

class CycleCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  handleClick = () => {
    this.setState((prevState) => {
      const nextCounter = prevState.counter + 1;
      return { counter: nextCounter === this.props.cycle ? 0 : nextCounter };
    });
  };
  render() {
    return (
      <button
        data-testid="cycle-counter"
        style={{ fontSize: "1rem", width: 120, height: 30 }}
        onClick={this.handleClick}
      >
        {this.state.counter}
      </button>
    );
  }
}

export default CycleCounter;
