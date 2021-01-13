import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/containers/Button";
import Input from "../components/containers/Input.";
import topIllustration from "../assets/img/top.svg";
import bottomIllustration from "../assets/img/bottom.svg";
import dotsIllustration from "../assets/img/dots.svg";
import circleIllustration from "../assets/img/circle.svg";
import curveIllustration from "../assets/img/curve.svg";
import roundedIllustration from "../assets/img/rounded.svg";
import logo from "../assets/img/logo.svg";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleEmailSubmission = (e) => {
    if (
      !email ||
      email.length === 0 ||
      !email.includes("@") ||
      !email.includes(".")
    ) {
      setError("Please provide a valid email");
      setSuccess(true);
      return;
    } else {
      setError(null);
      setSuccess(true);
    }
  };
  return (
    <div className="early-access">
      {error && alert(error)}
      {success && (
        <div className="success-modal__container">
          <div className="success-modal">
            <div className="success-text">
              <h1>Thanks for getting on board...</h1>
              <p>You'll hear from us soon</p>
            </div>
            <div className="ok">
              <Button className="btn btn__small" onClick={()=> setSuccess(false)}>Ok</Button>
            </div>
          </div>
        </div>
      )}
      <div className="content">
        <div className="circle">
          <img src={circleIllustration} alt="" />
        </div>
        <div className="curve">
          <img src={curveIllustration} alt="" />
        </div>
        <div className="rounded">
          <img src={roundedIllustration} alt="" />
        </div>
        <Link to="" className="early-logo">
          <img src={logo} alt="" />
        </Link>
        <div className="intro-text">
          <div className="intro-text__big">
            <h1>
              Why create a portfolio website from scratch if we've got you
              covered
            </h1>
          </div>
          <div className="intro-text__small">
            <p>Be one of the first 100 to try us out</p>
          </div>
        </div>
        <div className="early-form">
          <Input
            placeholder="Your email"
            onChange={handleEmail}
            value={email}
          />
          <Button className="btn btn__small" onClick={handleEmailSubmission}>
            Get notified
          </Button>
        </div>
      </div>

      <div className="top">
        <img src={topIllustration} alt="" />
      </div>
      <div className="bottom">
        <img src={bottomIllustration} alt="" />
      </div>
      <div className="right">
        <img src={dotsIllustration} alt="" />
      </div>
      {/* <div className="right">
        <img src="" alt="" />
      </div> */}
    </div>
  );
};

export default EarlyAccess;
