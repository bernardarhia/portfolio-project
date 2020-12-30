import FontPicker from "font-picker-react";
import React from "react";
import Avatar from "../components/containers/Avatar";
import Button from "../components/containers/Button";
import Header from "../components/containers/Header";
import Input from "../components/containers/Input.";
import Toolbar from "../components/presentational/Toolbar";

const Editor = () => {
  const [font, setFont] = React.useState("Open sans");

  return (
    <div className="editor_page">
      <Header>
        <Avatar />{" "}
        <Button
          style={{
            marginLeft: "1.5rem",
            background: "#fff",
            boxShadow: "0 0 4px rgba(0,144,255,0.17)",
          }}
          className="btn btn_preview"
        >
          Preview
        </Button>
      </Header>
      <div className="editor-wrapper">
        <div className="editor-container">
          <div className="editor apply-font">
          Editor
          </div>
        </div>
        <Toolbar>
         {/* colors */}
         <div className="colors">
           <p className="head">Colors</p>
         <div className="opacity">
            <Input type="range" className="slider" />
          </div>
          <div className="color">
            <Input type="color" />
          </div>
         </div>
         {/* Text */}
            <div className="texts">
              <p className="head">Texts</p>
              <div className="font-family">
                <p>Font</p>
                
        <FontPicker
          apiKey={process.env.REACT_APP_FONT_APIKEY}
          activeFontFamily={font}
          onChange={(nextFont) => {
            setFont(nextFont.family)
          }}
          limit={500}
        />
              </div>
              <div className="font-weight">
                <p>Weight</p>
                <select className="input_small">
                  <option value="">thin</option>
                  <option value="">regular</option>
                  <option value="">bold</option>
                  <option value="">bolder</option>
                </select>
              </div>
              <div className="letter-spacing">
                <p>Letter</p>
                <div className="inputs">
                  <Input type="number" className="input_small"  />
                  <Button className="btn">-</Button>
                  <Button className="btn">+</Button>
                </div>
              </div>
              <div className="word-spacing">
                <p>Word</p>
                <div className="inputs">
                  <Input type="number" className="input_small"  />
                  <Button className="btn">-</Button>
                  <Button className="btn">+</Button>
                </div>
              </div>
              <div className="line-height">
                <p>Line</p>
                <div className="inputs">
                  <Input type="number" className="input_small"  />
                  <Button className="btn">-</Button>
                  <Button className="btn">+</Button>
                </div>
              </div>
              <div className="text-align">
                <p>Align</p>
                <Input className="input_small" />
              </div>

              <div className="text-transform">
                <p>Transform</p>
                <select className="input_small">
                  <option value="">none</option>
                  <option value="">uppercase</option>
                  <option value="">lowercase</option>
                </select>
              </div>
              <div className="text-decoration">
                <p>Decoration</p>
                <div className="none">
                  <label htmlFor=""></label>
                <Input type="radio" />
                </div>
                <div className="u-line">
                  <label htmlFor=""></label>
                <Input type="radio" />
                </div>
                <div className="l-t">
                  <label htmlFor=""></label>
                <Input type="radio" />
                </div>
              </div>
            </div>
         {/* Others */}
        </Toolbar>
      </div>
    </div>
  );
};

export default Editor;
