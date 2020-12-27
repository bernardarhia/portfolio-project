import React from "react";
import Button from "../components/containers/Button";
import CountryList from "../components/containers/CountryList";
import FormHeaderText from "../components/containers/FormHeaderText";
import WorkList from "../components/containers/WorkList";
import FormScreen from "../components/screens/FormScreen";
import { countryList } from "../contents/countries";
import { workList } from "../contents/work";
import { useHistory } from "react-router-dom";
const Final = ({ location }) => {
  const redirectTo = useHistory();
  console.log(location);
  if (!location.state) {
    redirectTo.push("/signup");
    return;
  }

  const handleWork = (e) => {
    location.state.work = e.target.value;
  };
  const handleCountry = (e) => {
    location.state.work = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormScreen>
      <form onSubmit={handleSubmit}>
        <FormHeaderText className="">
          <h1>
            You're Almost Done <span>🥳</span>
          </h1>
        </FormHeaderText>
        <CountryList countryList={countryList} onChange={handleCountry} />
        <WorkList workList={workList} onChange={handleWork} />
        {location.state.work && location.state.country && (
          <div className="submit_btn">
            <Button
              className="btn"
              style={{
                color: "#5352ED",
                background: "none",
                padding: "1rem",
                textDecoration: "underline",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Start Creating
            </Button>
          </div>
        )}
      </form>
    </FormScreen>
  );
};

export default Final;
