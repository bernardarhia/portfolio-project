import React from "react";
import { Link } from "react-router-dom";
import guy from "../../assets/img/guy.png";
import background from "../../assets/img/right-corner.png";
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
      <div className="right-img__wrapper">
        {pageType === "login" || pageType === "signup" ? (
          <div className="corner-blue"></div>
        ) : (
          ""
        )}
        <div className="img_bg">
          <img src={guy} alt="A person behind a computer" />
          {text}
        </div>
        {pageType === "login" || pageType === "signup" ? (
          <div className="bottom-circles">
            <div className="circles">
              <div className="circle deep-yellow"></div>
              <div className="circle light-yellow"></div>
            </div>
            <div className="circles">
              <div className="circle light-yellow"></div>
              <div className="circle deep-yellow"></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FormScreen;
