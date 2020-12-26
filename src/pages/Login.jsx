import React, { useContext, useState } from "react";
import Button from "../components/containers/Button";
import FormHeaderText from "../components/containers/FormHeaderText";
import Input from "../components/containers/Input.";
import FormScreen from "../components/screens/FormScreen";
import { Link, useHistory } from "react-router-dom";
import Loader from "../components/containers/Loader";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { userContext } from "../context/userContext";
import { actions } from "../reducers/actions/actions";
import requests from "../apis/requests";
import { setToken } from "../utils/validateToken";
const Login = ({ path, location: { state: urlState } }) => {
  const redirectTo = useHistory();
  // checks current route's path and renders a text
  const currentPage = path.replace("/", "");

  const { state, setUser, setState } = useContext(userContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ type: actions.IS_LOADING });
    try {
      const loginUser = await requests.login("/login", userData);
      if (loginUser) {
        setUser({ type: actions.hasToken, user: loginUser.data.user });
        setState({ type: actions.SUCCESS });
        setToken(loginUser.data.token);
        setTimeout(() => {
          if (urlState) {
            redirectTo.push(urlState.from.pathname);
          }
          redirectTo.push("/dashboard");
        }, 1400);
      }
    } catch (error) {
      setState({ type: actions.ERROR, error: error.response.data });
    }
  };

  const handleEmail = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };
  const handlePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };
  return (
    <FormScreen pageType={currentPage}>
      <form onSubmit={handleSubmit}>
        <FormHeaderText className="">
          <h1>
            Howdy, <span>😊</span>
          </h1>
        </FormHeaderText>
        {state.error && <p className="error">{state.error}</p>}
        <div className="email">
          <Input
            className="input"
            type="text"
            placeholder="Email"
            value={userData.email}
            onChange={handleEmail}
          />
        </div>
        <div className="password">
          <Input
            className="input"
            type={`${state.show ?'text':'password'}`}
            placeholder="Password"
            value={userData.password}
            onChange={handlePassword}
          />
          <div
            onClick={() => {
              setState({ type: actions.SHOW });
            }}
          >
            {state.show ? <AiOutlineEyeInvisible />:<AiOutlineEye />}
          </div>
        </div>
        <div className="submit_btn">
          <Button className="btn btn_small blue">
            {state.isLoading ? <Loader /> : "Log in"}
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

export default Login;
