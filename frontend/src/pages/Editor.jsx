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
          <div className="editor apply-font">Editor</div>
        </div>
        <Toolbar>
          {/* Layouts */}
          <div className="layouts">
            <div className="head">Layouts</div>
            <div className="width">
              <p>Width</p>
              <Input type="range" className="slider" />
            </div>
            <div className="height">
              <p>Height</p>
              <Input type="range" className="slider" />
            </div>
            <div className="padding">
              <div className="wheels">
                <p>Padding</p>
                <div className="inputs">
                  <Input type="text" className="input__small" />
                  <Input type="text" className="input__small" readOnly />
                </div>
              </div>
              <div className="mini-wheels">
              <Input type="number" className="input__small" />
                  <Input type="number" className="input__small"  />
                   <Input type="number" className="input__small" />
                  <Input type="number" className="input__small"  />
              </div>
            </div>
            <div className="radius">
            <div className="wheels">
                <p>Radius</p>
                <div className="inputs">
                  <Input type="text" className="input__small" />
                  <Input type="text" className="input__small" readOnly />
                </div>
              </div>
              <div className="mini-wheels">
              <Input type="number" className="input__small" />
                  <Input type="number" className="input__small"  />
                   <Input type="number" className="input__small" />
                  <Input type="number" className="input__small"  />
              </div>
            </div>
            <div className="border"></div>
            <div className="bg-colors"></div>
          </div>
          {/* colors */}
          <div className="colors">
            <p className="head">Colors</p>
            <div className="opacity">
              <p>Opacity</p>
              <Input type="range" className="slider" />
            </div>
            <div className="color">
              <p>color</p>
              <Input type="color" />
              <Input type="number" className="small_input" />
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
                  setFont(nextFont.family);
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
            <div className="font-size">
              <p>size</p>
              <Input type="range" className="slider" />
            </div>
            <div className="letter-spacing">
              <p>Letter</p>
              <div className="inputs">
                <Input type="number" className="input_small" />
                <Button className="btn">-</Button>
                <Button className="btn">+</Button>
              </div>
            </div>
            <div className="word-spacing">
              <p>word</p>
              <div className="inputs">
                <Input type="number" className="input_small" />
                <Button className="btn">-</Button>
                <Button className="btn">+</Button>
              </div>
            </div>
            <div className="line-height">
              <p>Line</p>
              <div className="inputs">
                <Input type="number" className="input_small" />
                <Button className="btn">-</Button>
                <Button className="btn">+</Button>
              </div>
            </div>
            <div className="text-align">
              <p>Align</p>
              <Input className="input_small" />
            </div>
            <div className="text-transform">
              <p>Trans</p>
              <select className="input_small">
                <option value="">none</option>
                <option value="">uppercase</option>
                <option value="">lowercase</option>
              </select>
            </div>
            <div className="text-decoration">
              <p>Decor</p>
              <div className="radios">
                <div className="none">
                  <Input type="radio" id="none" name="decoration" />
                  <label htmlFor="none">Aa</label>
                </div>
                <div className="u-line">
                  <Input type="radio" id="under" name="decoration" />
                  <label htmlFor="under" className="under">
                    Aa
                  </label>
                </div>
                <div className="l-t">
                  <Input type="radio" id="line-t" name="decoration" />
                  <label htmlFor="line-t" className="line-t">
                    Aa
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Others */}
          <div className="others">
            <div className="head">Others</div>
            <div className="rotate">
              <p>Rotation</p>
              <Input type="range" className="slider" />
            </div>
          </div>
        </Toolbar>
      </div>
    </div>
  );
};

export default Editor;
