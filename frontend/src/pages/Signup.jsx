import React, { useContext, useState } from "react";
import Button from "../components/containers/Button";
import FormHeaderText from "../components/containers/FormHeaderText";
import Input from "../components/containers/Input.";
import FormScreen from "../components/screens/FormScreen";
import { Link,useHistory } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { userContext } from "../context/userContext";
import { actions } from "../reducers/actions/actions";
import requests from "../apis/requests";
const Signup = ({ path }) => {
  const redirectTo = useHistory()
  const { state, setUser, setState } = useContext(userContext);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    tnt:false,
    work:'',
    country:''
  });
  const currentPage = path.replace("/", "");

  // handle input changes

  const handleFirstName = (e) =>
    setUserData({ ...userData, firstName: e.target.value });

  const handleLastName = (e) =>
    setUserData({ ...userData, lastName: e.target.value });

  const handleEmail = (e) =>
    setUserData({ ...userData, email: e.target.value });

  const handlePassword = (e) =>
    setUserData({ ...userData, password: e.target.value });

    const handleTnT = e => setUserData({ ...userData,tnt:!userData.tnt});


    // handle form submission

    const handleSubmit = e=>{
      e.preventDefault();
      if(!userData.password || !userData.email || !userData.firstName || !userData.lastName){
        setState({type:actions.ERROR, error:'empty field detected'})
        return
      }
      if(userData.tnt === false){
        setState({type:actions.ERROR, error:'check terms and condition'})
        return
      }
      // const data = {
      //   userData, setUserData
      // }
      redirectTo.push({pathname:'/final', state:userData})
    }
  return (
    <FormScreen pageType={currentPage}>
      <form onSubmit={handleSubmit}>
        <FormHeaderText className="">
          <h1>Create Account</h1>
        </FormHeaderText>

{state.error && <p className="error">{state.error}</p>}
        <div
          className="name"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <Input
            className="input"
            placeholder="First Name"
            type="text"
            value={userData.firstName}
            onChange={handleFirstName}
          />
          <Input
            className="input"
            placeholder="Last Name"
            type="text"
            value={userData.lastName}
            onChange={handleLastName}
          />
        </div>
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
            type={`${state.show ? "text" : "password"}`}
            placeholder="Password"
            value={userData.password}
            onChange={handlePassword}
          />
          <div
            onClick={() => {
              setState({ type: actions.SHOW });
            }}
          >
            {state.show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        </div>
        <div
          className="recovery"
          // style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="terms_checked">
            <Input type="checkbox"  onChange={handleTnT} />
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
