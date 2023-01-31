import Toggle from "./Toggle";
import Logo from "./Logo";
import { SketchPicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faTwitch,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";

export default function Navigation(props) {
  const [brushClass, setBrushClass] = useState(
    "animate__animated animate__fadeIn animate__delay-2s"
  );

  const animate = () => {
    setBrushClass("animate__animated animate__tada");

    setTimeout(() => {
      setBrushClass("animate__animated");
    }, 1000);
  };

  return (
    <div className="navigation">
      <div className="inner">
        <Logo theme={props.theme} color={props.color} isLive={props.isLive} />

        <nav className="item-menu animate__animated animate__fadeIn animate__delay-1s">
          <input
            type="checkbox"
            href="#"
            className="menu-open"
            name="menu-open"
            id="menu-open"
          />
          <label
            id="menu-open-handler"
            className="menu-open-button"
            htmlFor="menu-open"
          >
            <span className="plus plus-1"></span>
            <span className="plus plus-2"></span>
          </label>
          <div className="real-menu">
            <a
              href="https://www.youtube.com/channel/UCDKJdFer1phQI95UinPZehw"
              className="menu-item"
              data-name="Turkey Tom"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>

            <a
              href="https://turkeytom.gg"
              className="menu-item"
              data-name="Discord"
              target="_blank"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>

            <a
              href="https://twitter.com/anonbirdd"
              className="menu-item"
              data-name="Twitter"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a
              href="https://www.youtube.com/channel/UCCAfRoTJrKPbSrh_Eg3i4vg"
              className="menu-item"
              data-name="Tom Dark"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </nav>

        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="color-picker-wrapper">
            <FontAwesomeIcon
              icon={faBrush}
              className={brushClass}
              onClick={animate}
            />

            <div className="color-picker">
              <SketchPicker
                color={props.color}
                onChange={props.handleChangeComplete}
                presetColors={props.presetColors}
              />
            </div>
          </span>

          <Toggle theme={props.theme} handleChangeTheme={props.changeTheme} />
        </div>
      </div>
    </div>
  );
}
