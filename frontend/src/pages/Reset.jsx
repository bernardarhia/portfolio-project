import React, { useContext, useState } from "react";
import Button from "../components/containers/Button";
import FormHeaderText from "../components/containers/FormHeaderText";
import Input from "../components/containers/Input.";
import FormScreen from "../components/screens/FormScreen";
import { Link } from "react-router-dom";
import Loader from "../components/containers/Loader";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { userContext } from "../context/userContext";
import { actions } from "../reducers/actions/actions";
// import requests from "../apis/requests";
// import { setToken } from "../utils/validateToken";
const Reset = ({ path, location: { state: urlState } }) => {
  // const redirectTo = useHistory();
  // checks current route's path and renders a text
  const currentPage = path.replace("/", "");

  
  return (
    <FormScreen>
      <form>
        <FormHeaderText className="">
          <h1>
            Reset, <span>😊</span>
          </h1>
        </FormHeaderText>
        <div className="password">
          <Input
            className="input"
            type="password"
            placeholder="Password"
          />
          <div
          >
            {/* {state.show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />} */}
          </div>
        </div>
        <div className="password">
          <Input
            className="input"
            type="password"
            placeholder="Confirm Password"
            
          />
          <div
          >
            {/* {state.show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />} */}
          </div>
        </div>
        <div className="submit_btn">
          <Button className="btn btn_small blue">
          Reset
          </Button>
        </div>
        <div
          className="recovery"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Link to="/recovery">Recover password</Link>
        </div>
        <Link to="/dashboard">Dashboard</Link>
      </form>
    </FormScreen>
  );
};

export default Reset;
