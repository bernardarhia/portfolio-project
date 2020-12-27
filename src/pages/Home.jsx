import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../context/userContext";
import { Link, useHistory } from "react-router-dom";
import requests from "../apis/requests";
import { verifyToken } from "../utils/validateToken";
import Header from "../components/containers/Header";
import Avatar from "../components/containers/Avatar";
import Tooltip from "../components/containers/Tooltip";
const Home = ({ location: { state: urlState } }) => {
  const redirectTo = useHistory();
  const { user, setUser } = useContext(userContext);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setShowTooltipPosition] = useState({x:0,y:0})
  useEffect(() => {
    const verify = async () => {
      const token = await verifyToken();
      try {
        const userIsLoggedIn = await requests.verify("/has_token", token);
        if (userIsLoggedIn.data) {
          const user = await requests.me("/me", token);
          setUser({ type: "hasToken", user: user.data });
          if (urlState) {
            redirectTo.push(urlState.from.pathname);
          } else {
            redirectTo.push("/dashboard");
          }
        }
      } catch (error) {
        if (error.response) {
          console.log(error);
        }
      }
    };
    verify();
  }, [redirectTo, setUser, urlState]);
  return (
    <>
      <Header>
        <Avatar
          initials="AB"
          onHoverStart={(e) => {
            setShowTooltip(true)
            setShowTooltipPosition({...tooltipPosition, x:e.x,y:e.y})
          }}
          onHoverEnd={() => {
            setShowTooltip(false)
            setShowTooltipPosition({...tooltipPosition, x:0,y:0})
          }}
        />
        <Tooltip
          show={showTooltip}
          text="Bernard Arhia"
          initial={{ scale: 0, y:50 }}
          animate={{ scale: 1}}
          position={tooltipPosition}
        />
      </Header>
      {!user.isAuth && (
        <div>
          <Link to="/login">Login</Link>
        </div>
      )}
    </>
  );
};

export default Home;
