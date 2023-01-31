import Tilt from "react-parallax-tilt";

export default function Video(props) {
  return (
    <Tilt
      perspective={500}
      scale={1.2}
      glareEnable={true}
      glareMaxOpacity={0.5}
      className="video-wrapper"
    >
      <span
        onClick={() =>
          props.handleModalClick(props.src.replace("yt:video:", ""))
        }
        className="video"
        style={{ background: `url(${props.img})` }}
      >
        <div className="image-container">
          <img src={props.img} />
        </div>
      </span>

      <div
        className="video-text"
        onClick={() =>
          props.handleModalClick(props.src.replace("yt:video:", ""))
        }
      >
        <h5>
          <span>{props.author}</span>
        </h5>

        <h3>{props.title}</h3>

        <h5
          style={{
            textAlign: "right",
            textTransform: "uppercase",
            letterSpacing: "4px",
            fontSize: "9px",
            opacity: 0.5
          }}
        >
          {`${props.date.split(" ")[1]} ${props.date.split(" ")[2]} ${
            props.date.split(" ")[3]
          }`}
        </h5>
      </div>
    </Tilt>
  );
}
