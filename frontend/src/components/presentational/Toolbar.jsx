import React, { useState, useContext } from "react";
import { toolbarContext } from "../../context/toolbarContext";
import SocialToolbar from "./SocialToolbar";
import FontPicker from "font-picker-react";
const Toolbar = ({ children }) => {
  const { showStyle, setShowStyle } = useContext(toolbarContext);
  const [active, setActive] = useState({
    style: false,
    social: false,
  });
  const handleOpen = (e) => {
    const text = e.target.textContent.toLowerCase();
    if (text === "social") {
      setActive({ social: true, style: false });
      setShowStyle({ social: true, style: false });
    }
    if (text === "styles") {
      setActive({ style: true, social: false });
      setShowStyle({ social: false, style: true });
    }
  };
  return (
    <div className="toolbar-container">
      <div className="toolbar-header">
        <div className="styles">
          <span
            onClick={handleOpen}
            className={active.style ? "active_tab" : ""}
          >
            Styles
          </span>
        </div>
        <div className="social">
          <span
            onClick={handleOpen}
            className={active.social ? "active_tab" : ""}
          >
            Social
          </span>
        </div>
      </div>

      <div className="tools">
      {showStyle.style && (
        children
      )}
      </div>

      {showStyle.social && <SocialToolbar />}
    </div>
  );
};

export default Toolbar;
