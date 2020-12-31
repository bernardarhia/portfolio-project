import React,{useContext} from "react";
import Button from "../components/containers/Button";
import FormHeaderText from "../components/containers/FormHeaderText";
import Input from "../components/containers/Input.";
import FormScreen from "../components/screens/FormScreen";
import { Link } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { userContext } from "../context/userContext";
import { actions } from "../reducers/actions/actions";
import requests from "../apis/requests";
const Signup = ({ path }) => {
  const { state, setUser, setState } = useContext(userContext);

  const currentPage = path.replace("/", "");

  return (
    <FormScreen pageType={currentPage}>
      <form
      >
        <FormHeaderText className="">
          <h1>Create Account</h1>
        </FormHeaderText>

        <div
          className="name"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <Input className="input" placeholder="First Name" type="text" />
          <Input className="input" placeholder="Last Name" type="text" />
        </div>
        <div className="email">
          <Input className="input" type="text" placeholder="Email" />
        </div>
        <div className="password">
        <Input
            className="input"
            type={`${state.show ?'text':'password'}`}
            placeholder="Password"
           
          />
          <div
            onClick={() => {
              setState({ type: actions.SHOW });
            }}
          >
            {state.show ? <AiOutlineEyeInvisible />:<AiOutlineEye />}
            </div>
        </div>
        <div className="recovery" style={{display:'flex',justifyContent:'space-between'}}>
          <div className="terms_checked">
            <Input type="checkbox" className="input"/>
          </div>
          <p>
            {" "}
            <span style={{ display: "block" }}>
              By signing up, you have read and agreed to our{" "}
            </span>
            <Link to="/terms_and_conditions">terms and conditions</Link>
          </p>
        </div>
        <div className="submit_btn">
          <Button className="btn btn_small blue">Sign up</Button>
        </div>
      </form>
    </FormScreen>
  );
};

export default Signup;