import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/containers/Button";
import Input from "../components/containers/Input.";
import topIllustration from "../assets/img/top.svg";
import bottomIllustration from "../assets/img/bottom.svg";
import dotsIllustration from "../assets/img/dots.svg";
import circleIllustration from "../assets/img/circle.svg";
import curveIllustration from "../assets/img/curve.svg";
import roundedIllustration from "../assets/img/rounded.svg";
const EarlyAccess = () => {
  return (
    <div className="early-access">
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
          Port<span>L</span>inks
        </Link>
        <div className="intro-text">
          <div className="intro-text__big">
            <h1>
              Why create a portfolio website from scratch if w've got you
              covered
            </h1>
          </div>
          <div className="intro-text__small">
            <p>Be one of the first 100 to try us out</p>
          </div>
        </div>
        <div className="early-form">
          <Input placeholder="Your email" />
          <Button className="btn btn__small">Get notified</Button>
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
