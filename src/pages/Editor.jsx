import React from "react";
import Avatar from "../components/containers/Avatar";
import Button from "../components/containers/Button";
import Header from "../components/containers/Header";
import Toolbar from "../components/presentational/Toolbar";

const Editor = () => {
 
  return (
    <div className="editor_page">
      <Header>
        <Avatar />{" "}
        <Button
          style={{
            marginLeft: "1.5rem",
            background: "#fff",
            boxShadow: "0 0 4px rgba(0,144,255,0.17)",
          }}
          className="btn btn_preview"
        >
          Preview
        </Button>
      </Header>
      <div className="editor-wrapper">
        <div className="editor-container">
          <div className="editor">
          Editor
          </div>
        </div>
        <Toolbar>
         
        </Toolbar>
      </div>
    </div>
  );
};

export default Editor;
