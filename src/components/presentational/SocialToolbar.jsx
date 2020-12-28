import React from "react";
import { socialLinks } from "../../contents/socialLinks";
import Button from "../containers/Button";
import SocialLink from "../containers/SocialLink";

const SocialToolbar = () => {
  return (
    <div className="social-toolbar">
      <div className="social">
        {socialLinks.map((socialLink, index) => (
          <SocialLink
            socialLink={socialLink}
            key={index + socialLink.toLowerCase()}
          />
        ))}
        <Button className="btn btn_small blue">Save</Button>
      </div>
    </div>
  );
};

export default SocialToolbar;
