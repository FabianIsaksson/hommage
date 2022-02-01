import "./main.scss";
import Frame from "../Frame/frame";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as Logo } from "../../static/svg/logo.svg";
import viewCollections from "../../static/images/view-collections.png";
import { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import { Player } from "../player";
import LetterLoadingScreen from "../letter-loading-screen";
import classNames from "classnames";

const Main = () => {
  const [showFrame, setShowFrame] = useState(false);

  const videoJsOptions: VideoJsPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    src: "//commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    sources: [
      {
        src: "//commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
        <div className="player">
          <Player options={videoJsOptions} onReady={handlePlayerReady} />
        </div>

        <div className="main-content">
          <Logo className="main-logo" style={{ opacity: logoFade }} />
          <p
            onClick={() => {
              playerRef.current?.requestFullscreen();
              playerRef.current?.play();
            }}
            className="main-film-play-mobile"
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
              <img alt="view collections" src={viewCollections}></img>
              <p>Show Collections</p>
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
                  className="main-film-play-desktop"
                >
                  PLAY FILM
                </p>
              </div>
            </div>
          </div>
        </div>
        <Frame show={showFrame} setShow={setShowFrame} />
      </div>
    </div>
  );
};

export default Main;
