import { ReactComponent as Love } from "../heart.svg";
import React, { useState } from "react";

export default function Footer() {
  const [loveClass, setLoveClass] = useState(
    "love animate__animated animate__fadeIn animate__delay-2s"
  );

  const animate = () => {
    setLoveClass("animate__animated animate animate__heartBeat");

    setTimeout(() => {
      setLoveClass("animate__animated");
    }, 1000);
  };

  return (
    <div className="footer">
      Made with
      <span className="love" onClick={animate}>
        <Love className={loveClass} />
      </span>
      by
      <a href="mailto:graemescott3@gmail.com">Graeme Scott</a>.
    </div>
  );
}
