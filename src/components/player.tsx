import React from "react";
import videojs, { VideoJsPlayer } from "video.js";
import { ReactComponent as Homage } from "../static/svg/homage.svg";
import "video.js/dist/video-js.css";
import "../components/player.scss";
import poster from "../static/images/bbb-splash.png";
import { VideoJsPlayerOptions } from "video.js";
import ArrowButton from "./arrow-button";

export const Player = (props: {
  onReady: (p: VideoJsPlayer) => void;
  options: VideoJsPlayerOptions;
}) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef<VideoJsPlayer | null>(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options, () => {
        // console.log("player is ready");
        onReady && onReady(player);
      });

      const player = playerRef.current;
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
      // player.play();
    }
    playerRef.current.on("fullscreenchange", function () {
      if (playerRef.current?.isFullscreen()) {
        playerRef.current?.play();
      } else {
        playerRef.current?.pause();
      }
    });
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};

const PlayerPage = ({
  onReady,
  onArrowDown,
}: {
  onReady: (p: VideoJsPlayer) => void;
  onArrowDown: () => void;
}) => {
  const videoJsOptions: VideoJsPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    src: "//commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster,
    sources: [
      {
        src: "//commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
      },
    ],
  };

  // const changePlayerOptions = () => {
  //   // you can update the player through the Video.js player instance
  //   if (!playerRef.current) {
  //     return;
  //   }
  //   // [update player through instance's api]
  //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
  //   playerRef.current.autoplay(false);
  // };

  return (
    <div className="player">
      <div className="player-logo">
        <Homage />
      </div>
      <Player options={videoJsOptions} onReady={onReady} />
      <ArrowButton
        direction="down"
        text={"VIEW COLLECTION"}
        absolute
        onClick={onArrowDown}
      />
    </div>
  );
};

export default PlayerPage;
