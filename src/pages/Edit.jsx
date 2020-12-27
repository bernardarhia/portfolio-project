import React from "react";
import Avatar from "../components/containers/Avatar";
import Button from "../components/containers/Button";
import Header from "../components/containers/Header";

const Edit = () => {
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
    </div>
  );
};

export default Edit;
