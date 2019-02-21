import React, { Component } from "react";
import Editor from "draft-js-plugins-editor";
import { EditorState } from "draft-js";
import "./css/NoteSpace_index.css";

class NoteSpace extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  onChange = editorState => {
    this.setState({ editorState });
  };

  render() {
    return (
      <div>
        <Editor
          ref={this.setEditor}
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default NoteSpace;
