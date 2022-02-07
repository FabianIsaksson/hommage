import "./main.scss";
import Frame from "../Frame/frame";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as Logo } from "../../static/svg/logo.svg";
import backgroundClipMp4 from "../../static/background-clip.mp4";
import backgroundClipWebm from "../../static/background-clip.webm";
import { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import { Player } from "../player";
import LetterLoadingScreen from "../letter-loading-screen";
import classNames from "classnames";
import { useWindowSize } from "../../hooks/useWindowSize";
import Collection from "./collection";
import Colophon from "./colophon";
import topBackgroundMobile from "../../static/images/bakgrund_top_mobile.jpg";
import bottomBackgroundMobile from "../../static/images/bakgrund_bottom_mobile.jpg";
import { ReactComponent as ArrowDown } from "../../static/svg/arrow-down.svg";

const Main = () => {
  const windowSize = useWindowSize();
  const [showFrame, setShowFrame] = useState(false);

  const videoJsOptions: VideoJsPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    src: backgroundClipMp4,
    sources: [
      {
        src: backgroundClipWebm,
        type: "video/webm",
      },
      {
        src: backgroundClipMp4,
        type: "video/mp4",
      },
    ],
  };

  const mainRef = useRef<HTMLDivElement>(null);

  const playerRef = useRef<VideoJsPlayer | null>(null);

  const handlePlayerReady = (player: VideoJsPlayer) => {
    playerRef.current = player;
  };

  const [logoFade, setLogoFade] = useState(1);

  useEffect(() => {
    const fade = () => {
      setLogoFade(1 - (mainRef.current?.scrollTop ?? 1 ^ 2.5) / 100);
    };

    mainRef.current?.addEventListener("scroll", fade);
    return () => {
      mainRef.current?.removeEventListener("scroll", fade);
    };
  }, []);

  const [loading, setLoading] = useState(true);
  const [contained, setContained] = useState(true);

  return (
    <div className={classNames("main-container", { contained })}>
      {!windowSize.isMobile && (
        <video
          className={"main-video-desktop"}
          controls={false}
          muted
          autoPlay
          playsInline
          loop
        >
          <source src={backgroundClipWebm} type="video/webm" />
          <source src={backgroundClipMp4} type="video/mp4" />
        </video>
      )}
      {loading && (
        <LetterLoadingScreen
          onArrowDown={() => {
            setContained(false);
            setTimeout(() => {
              window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
              });
              setTimeout(() => {
                setLoading(false);
              }, 500);
            }, 50);
          }}
          onArrowUp={() => {}}
        />
      )}
      <div className="main" ref={mainRef}>
        <img
          className="top-background-mobile"
          alt="top-background-mobile"
          src={topBackgroundMobile}
        />
        <div className="player">
          <Player options={videoJsOptions} onReady={handlePlayerReady} />
        </div>

        <div className="main-content" style={{ opacity: showFrame ? 0 : 1 }}>
          <Logo
            className="main-logo"
            style={{ opacity: windowSize.isMobile ? 1 : logoFade }}
          />
          <p
            onClick={() => {
              playerRef.current?.requestFullscreen();
              playerRef.current?.play();
            }}
            className="main-film-play-mobile clickable"
          >
            PLAY FILM
          </p>

          <div className="main-content-split">
            <div
              className="main-content-view-collections"
              onClick={() => {
                setShowFrame(true);
              }}
            >
              <Collection />
              <p className="clickable">Show Collections</p>
            </div>
            <div className="main-content-info">
              <h1>BECKMANS COLLEGE OF DESIGN AT STOCKHOLM FASHION WEEK AW22</h1>
              <div>
                <p className="line">
                  The BA fashion students at Beckmans College of Design have
                  interpreted six fashion icons.
                </p>
                <p className="line">
                  To move forward you have to look back. In the project
                  "Beckmans Homage", the students have drawn inspiration from
                  fashion history and brought it into the future.
                </p>
                <p className="line">
                  The twelve students have each created highly personal
                  collections based on one of the well-known fashion brands.
                  Curiosity and creativity can be seen as a common denominator
                  along with sharp silhouettes and contrasting material choices.
                </p>
                <p className="line">
                  The legendary fashion desginers interpreted are Augusta
                  Lundin, Barbara Hulanicki/Biba and Claude Montana along with
                  the Beckmans’ alumni Gunilla Pontén, Sighsten Herrgård and
                  Ann-Sofie Back.
                </p>
                <p
                  onClick={() => {
                    playerRef.current?.requestFullscreen();
                    playerRef.current?.play();
                  }}
                  className="main-film-play-desktop clickable"
                >
                  PLAY FILM
                </p>
              </div>
            </div>
          </div>
          <p
            className="colophon-button-desktop"
            onClick={() => {
              mainRef.current?.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Colophon
            <ArrowDown />
          </p>
        </div>
        <div className="main-content" style={{ opacity: showFrame ? 0 : 1 }}>
          <Colophon />
          <img
            className="bottom-background-mobile"
            alt="bottom-background-mobile"
            src={bottomBackgroundMobile}
          />
        </div>
        <Frame show={showFrame} setShow={setShowFrame} />
      </div>
    </div>
  );
};

export default Main;
