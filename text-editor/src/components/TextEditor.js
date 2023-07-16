import React from 'react';

class TextEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      last: [],
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
    e.preventDefault();
  }

  handleAppend = (e) => {
    if (this.state.text !== "") {
      this.setState(prevState => ({
        message: prevState.message + " " + prevState.text,
        last: [...prevState.last, prevState.text],
        text: ""
      }));
    }
    e.preventDefault();
  }

  handleUndo = (e) => {
    if (this.state.message !== "") {
      this.setState(prevState => {
        const newLast = prevState.last.slice(0, -1);
        const newMessage = newLast.join(' ');
        return {
          message: newMessage,
          last: newLast
        }
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input className="word-input" type="text" value={this.state.text} onChange={this.handleChange} data-testid="word-input" />
          <button data-testid="append-button" disabled={this.state.text === ""} onClick={this.handleAppend}>Append</button>
          <button data-testid="undo-button" disabled={this.state.last.length === 0} onClick={this.handleUndo}>Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">{this.state.message}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
