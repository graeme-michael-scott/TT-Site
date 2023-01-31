import Lottie from "lottie-react";
import toggleAnimation from "../toggle.json";
import React, { useRef, useEffect } from "react";

export default function Toggle(props) {
  const lottieRef = useRef();

  const toggle = () => {
    if (props.theme === "light") {
      lottieRef.current.playSegments([1, 50], true);
      props.handleChangeTheme(true);
    } else {
      lottieRef.current.playSegments([50, 70], true);
      props.handleChangeTheme(false);
    }
  };

  useEffect(() => {
    if (props.theme === "dark") {
      lottieRef.current.playSegments([1, 50], true);
    }
  }, []);

  return (
    <div
      className="toggle animate__animated animate__fadeIn animate__delay-3s"
      onClick={toggle}
    >
      <Lottie
        lottieRef={lottieRef}
        loop={false}
        autoplay={false}
        animationData={toggleAnimation}
      />
    </div>
  );
}
