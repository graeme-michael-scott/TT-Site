import { ReactComponent as Turkey } from "../turkey.svg";
import mojs from "@mojs/core";
import React, { useState, useRef, useEffect } from "react";

export default function Logo(props) {
  const [turkeyClass, setTurkeyClass] = useState(
    "animate__animated animate__lightSpeedInLeft"
  );
  let burst = useRef();
  let bubbles = useRef();

  useEffect(() => {
    burst.current = new mojs.Burst({
      parent: ".logo",
      left: 0,
      top: 0,
      radius: { 0: 30 },
      angle: "rand(0, 360)",
      children: {
        shape: "line",
        stroke: props.theme === "dark" ? "white" : "#202124",
        fill: "none",
        scale: 1,
        scaleX: { 1: 0 },
        easing: "cubic.out",
        duration: 1000
      }
    });

    bubbles.current = new mojs.Burst({
      parent: ".logo",
      left: 0,
      top: 0,
      radius: 28,
      count: 3,
      timeline: { delay: 100 },
      children: {
        stroke: props.theme === "dark" ? "white" : "#202124",
        fill: "none",
        scale: 1,
        strokeWidth: { 8: 0 },
        radius: { 0: "rand(6, 10)" },
        degreeShift: "rand(-50, 50)",
        duration: 400,
        delay: "rand(0, 250)"
      }
    });
  });

  const logoAnimation = (e) => {
    var s = document.createElement("script");
    s.type = "text/javascript";
    document.body.appendChild(s);
    s.src = "https://hi.kickassapp.com/kickass.js";
    void 0;

    burst.current.tune({ x: e.pageX, y: e.pageY }).generate().replay();
    bubbles.current.tune({ x: e.pageX, y: e.pageY }).generate().replay();
  };

  setTimeout(() => {
    setTurkeyClass("animate__animated animate__rubberBand");
  }, 30000);

  return (
    <div className={`logo ${props.isLive !== "" ? "live" : ""}`} onClick={logoAnimation}>
      <Turkey className={turkeyClass} />
    </div>
  );
}
