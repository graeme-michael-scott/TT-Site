import "./styles.css";
import VideoList from "./components/VideoList";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faArrowRight,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import React, { useState, useRef, useEffect } from "react";
import "animate.css";
import tom from "./tom.png";
import plush from "./plush.webp";
import banner from "./banner.png";
import Tilt from "react-parallax-tilt";
import { ReactComponent as Turkey } from "./turkey.svg";

export default function App() {
  const presetColors = [
    "#ffbe0b",
    "#fb5607",
    "#ff006e",
    "#8338ec",
    "#3a86ff",
    "#00AF54",
    "#75DDDD",
    "#FB07E1",
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const changeName = (e) => setName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changeSubject = (e) => setSubject(e.target.value);
  const changeMessage = (e) => setMessage(e.target.value);

  const [theme, setTheme] = useState("dark");
  const [color, setColor] = useState(
    presetColors[Math.floor(Math.random() * presetColors.length)]
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState("");
  const [quote, setQuote] = useState({
    content: "While you're scrolling, leave me a message!",
    author: "Turkey Tom",
  });
  const [top, setTop] = useState(0);

  const [videos, setVideos] = useState(0);
  const [isLive, setIsLive] = useState("");

  // initialize an Isotope object with configs
  useEffect(() => {
    // Put your channel id here and you are good to go
    var channelID = "UCDKJdFer1phQI95UinPZehw";
    var channelID2 = "UCCAfRoTJrKPbSrh_Eg3i4vg";

    Promise.all([
      fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D" +
          channelID
      ).then((data) => data.json()),
      fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D" +
          channelID2
      ).then((data) => data.json()),

      fetch(
        "https://proxy.cors.sh/https://yt.lemnoslife.com/noKey/search?part=snippet&channelId=" +
          channelID2 +
          "&type=video&eventType=live",
        {
          headers: {
            "x-cors-api-key": "temp_479f223b0df1aeaa56ead14f1f2c3107",
          },
        }
      )
        .then((data) => data.json())
        .catch(() => console.log("error")),
      fetch("/private.txt").then((data) => data.text()),
    ])
      .then(([turkeyTom, tomDark, live, privateVideos]) => {
        if (live && live.items.length) {
          setIsLive(live.items[0]);

          fetch("/private.php", {
            method: "POST",
            body: JSON.stringify({
              password: "live",
              video: live.items[0].id.videoId,
            }),
          }).then((data) => {});
        }

        let objecto = tomDark;

        objecto.items = [...turkeyTom.items, ...tomDark.items];

        objecto.items.sort((a, b) => {
          return new Date(b.pubDate) - new Date(a.pubDate);
        });

        objecto.items = objecto.items.filter((item) => {
          if (
            !privateVideos.includes(item.guid.replace("yt:video:", "").trim())
          ) {
            return item;
          }
        });

        return objecto;
      })
      .then((data) => {
        setVideos(data);
      });
  }, []);

  const themeRef = useRef();

  const changeTheme = (theme) => {
    setTheme(theme ? "dark" : "light");
  };

  const handleChangeComplete = (color) => {
    setColor(
      `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
    );
  };

  const modalClick = (video) => {
    setModalOpen(true);
    //setTop(window.scrollY);

    setTimeout(() => {
      setModalVideo(video);
    }, 1000);
  };

  const modalClose = () => {
    setModalOpen(false);

    setTimeout(() => {
      //const oldTop = top;
      //setTop(0);
      //window.scrollTo(0, oldTop);
      setModalVideo("");
    }, 300);
  };

  document.addEventListener("keyup", (e) => {
    if (e.keyCode === 27) {
      window.location.reload();
    }
  });

  const [plushClass, setPlushClass] = useState(
    "animate__animated animate__fadeIn animate__delay-5s"
  );
  const [formClass, setFormClass] = useState("");

  const formSend = () => {
    if ((name !== "") & (email !== "") & (subject !== "") & (message !== "")) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      fetch("/mail.php", {
        method: "POST",
        body: JSON.stringify({
          subject: subject,
          message: message,
          email: email,
          name: name,
        }),
      }).then((data) => {});

      setFormClass("animate__animated animate__fadeOut formHide");

      setQuote({
        content: "Appreciate the message! I'll get back to you soon",
        author: "Tom Dark",
      });

      setPlushClass("animate__animated animate__rubberBand");

      setTimeout(() => {
        setPlushClass("animate__animated");
      }, 1000);
    }
  };

  const animate = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    if (response.ok) {
      setQuote(data);
    }

    setPlushClass("animate__animated animate__rubberBand");

    setTimeout(() => {
      setPlushClass("animate__animated");
    }, 1000);
  };

  const [currentFilter, setCurrentFilter] = useState("*");
  const filter = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div
      className={`theme-wrapper theme-${theme} ${modalOpen ? "open" : ""}`}
      onClick={modalOpen ? modalClose : () => {}}
    >
      <style>{`:root{--theme-color: ${color};}`}</style>
      <div className="close" onClick={modalClose}>
        <FontAwesomeIcon icon={faClose} />
      </div>

      <div className="modal">
        {modalVideo !== "" ? (
          <span>
            <iframe
              className="animate__animated animate__fadeIn"
              src={`https://www.youtube.com/embed/${modalVideo.replace(
                "yt:video:",
                ""
              )}?autoplay=1`}
              title="Modal"
            />
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="theme" style={{ top: -top }} ref={themeRef}>
        <Navigation
          theme={theme}
          color={color}
          handleChangeComplete={handleChangeComplete}
          changeTheme={changeTheme}
          presetColors={presetColors}
          isLive={isLive}
        />

        <div
          className="hero"
          //style={
          //{
          //background: `url(https://i.ytimg.com/vi/mME0NXRQHuc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDBdLcc2xTs8IczMoGpa85yazqXYg)`
          //}
          //}
        >
          <div className="hero-video">
            {isLive !== "" ? (
              <iframe
                className="animate__animated animate__fadeIn animate__delay-1s"
                src={`https://www.youtube.com/embed/${isLive.id.videoId}?autoplay=1&mute=1&loop=1`}
                title="Hero"
              />
            ) : (
              <iframe
                className="animate__animated animate__fadeIn animate__delay-1s"
                src={`https://www.youtube.com/embed/${
                  videos ? videos.items[0].guid.replace("yt:video:", "") : ""
                }?autoplay=1&mute=1&loop=1`}
                title="Hero"
              />
            )}
          </div>

          <div
            className="hero-text animate__animated animate__fadeIn animate__delay-4s"
            onClick={() => {
              isLive !== ""
                ? modalClick(isLive.id.videoId)
                : modalClick(videos ? videos.items[0].guid : "");
            }}
          >
            <div className="hero-inner">
              <img
                className="animate__animated animate__tada animate__delay-6s"
                src={tom}
                alt=""
              />

              <h6>{isLive !== "" ? "Live" : "Now playing"}</h6>

              {isLive !== "" ? (
                <h2>{videos ? isLive.snippet.title : ""}</h2>
              ) : (
                <h2>{videos ? videos.items[0].title : ""}</h2>
              )}

              <h5>
                {isLive !== "" ? "Join the stream" : "Watch the latest video"}
                <FontAwesomeIcon icon={faArrowRight} />
              </h5>
            </div>
          </div>
        </div>

        <div className="inner inner-video" style={{ alignItems: "center" }}>
          <h1 className="animate__animated animate__fadeIn animate__delay-5s">
            Videos
          </h1>

          <div className="video-buttons animate__animated animate__fadeIn animate__delay-5s">
            <button
              className={currentFilter === "*" ? "active" : ""}
              onClick={() => filter("*")}
            >
              Latest Uploads
            </button>
            <button
              className={currentFilter === "turkeytom" ? "active" : ""}
              onClick={() => filter("turkeytom")}
            >
              Turkey Tom
            </button>
            <button
              className={currentFilter === "tomdark" ? "active" : ""}
              onClick={() => filter("tomdark")}
            >
              Tom Dark
            </button>
          </div>
        </div>

        <VideoList
          filter={currentFilter}
          videos={videos}
          handleModalClick={modalClick}
        />

        <div className="banner-wrapper animate__animated animate__fadeIn animate__delay-5s">
          <img className="banner" src={banner} />

          <a
            href="https://discord.gg/n8PmuFas3d"
            className="hero-text animate__animated animate__fadeIn animate__delay-4s"
            target="_blank"
          >
            <div className="hero-inner">
              <img
                className="animate__animated animate__tada animate__delay-6s"
                src={tom}
                alt=""
              />

              <h6>Annoucement</h6>

              <h2>
                New Discord Server <FontAwesomeIcon icon={faDiscord} />
              </h2>

              <h5>
                Join the community
                <FontAwesomeIcon icon={faArrowRight} />
              </h5>
            </div>
          </a>
        </div>

        <div className="inner inner-mini">
          <h1 className="animate__animated animate__fadeIn animate__delay-5s">
            Contact
          </h1>
        </div>

        <div className="inner inner-mini animate__animated animate__fadeIn animate__delay-5s">
          <div className="formWrapper">
            <div className={formClass}>
              <input
                type="text"
                placeholder="Name"
                onChange={changeName}
                value={name}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={changeEmail}
                value={email}
              />
              <input
                type="text"
                placeholder="Subject"
                onChange={changeSubject}
                value={subject}
              />
              <textarea
                placeholder="Message"
                onChange={changeMessage}
                value={message}
              />
              <button onClick={formSend}>
                Send
                {(name === "") |
                (email === "") |
                (subject === "") |
                (message === "") ? (
                  <span>You must fill out all of the fields</span>
                ) : (
                  ""
                )}
              </button>
            </div>

            {formClass ? (
              <div className="animate__animated animate__fadeIn animate__delay-1s thankyou">
                <Turkey />
                Thank you!
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="plush" onClick={animate}>
            <Tilt scale="1.2">
              <blockquote className="speech-bubble">
                <p>{quote.content}</p>
                <cite>{quote.author}</cite>
              </blockquote>
              <img className={plushClass} src={plush} alt="Turkey Tom Plush" />

              <div className="price animate__animated animate__fadeIn animate__delay-12s">
                $20
              </div>

              <div className="plush-text">Turkey Tom Plush</div>
            </Tilt>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
