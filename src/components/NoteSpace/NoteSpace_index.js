import React, { Component } from "react";
import Editor from "draft-js-plugins-editor";
import { EditorState, RichUtils } from "draft-js";
import "./css/NoteSpace_index.css";

class NoteSpace extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  onChange = editorState => {
    this.setState({ editorState });
  };

  _onClick = e => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, e.target.name)
    );
  };

  render() {
    const styles = ["BOLD", "ITALIC", "UNDERLINE", "CODE"];
    const buttons = styles.map(style => {
      return (
        <button key={style} onClick={this._onClick} name={style}>
          {style}
        </button>
      );
    });

    return (
      <div className="NoteSpace--wrapper">
        <div className="toolbar">{buttons}</div>
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
