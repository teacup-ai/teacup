import React, { Component } from "react";
import "./App.css";
// Components
import NoteSpace from "./components/NoteSpace/NoteSpace_index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Tea</h2>
        <NoteSpace />
      </div>
    );
  }
}

export default App;
