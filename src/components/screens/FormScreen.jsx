import React from "react";
import { Link } from "react-router-dom";
import guy from "../../img/guy.png";
const FormScreen = ({ children, pageType }) => {
  var text;
  switch (pageType) {
    case "login": {
      text = (
        <p>
          <span>Don't have an account? </span>
          <Link to="/signup">Sign up</Link>
        </p>
      );
      break;
    }
    case "signup": {
      text = (
        <p>
          <span>Already have an account? </span>
          <Link to="/login">Log in</Link>
        </p>
      );
      break;
    }
    default: {
      text = "";
      break;
    }
  }
  return (
    <div className="form-container">
      <div className="input-wrapper">{children}</div>
      <div className="glass_bg">
        <div className="img_bg">
          <img src={guy} alt="A person behind a computer" />
          {text}
        </div>
      </div>
    </div>
  );
};

export default FormScreen;
