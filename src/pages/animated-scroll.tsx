import { useEffect, useRef } from "react";
import "./animated-scroll.scss";
/*
https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/
*/

const AnimatedScroll = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  const frameCount = 249;

  const currentFrame = (index: number) =>
    `/static/images/animation/plate-scroll/ps-${index
      .toString()
      .padStart(3, "0")}.jpg`;

  useEffect(() => {
    const context = canvas.current?.getContext("2d");

    if (context) {
      const img = new Image();
      img.src = currentFrame(1);
      img.onload = function () {
        context.drawImage(
          img,
          0,
          0,
          window.innerWidth,
          window.innerWidth * (9 / 16),
        );
      };

      const updateImage = (index: number) => {
        img.src = currentFrame(index);
        context.drawImage(
          img,
          0,
          0,
          window.innerWidth,
          window.innerWidth * (9 / 16),
        );
      };

      window.addEventListener("scroll", () => {
        const html = document.documentElement;
        const scrollTop = html.scrollTop;
        const maxScrollTop = html.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(
          frameCount - 1,
          Math.ceil(scrollFraction * frameCount),
        );

        requestAnimationFrame(() => updateImage(frameIndex + 1));
      });
    }

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    preloadImages();
  }, []);

  return (
    <div className="animated-scroll">
      {/* <img
        alt="test"
        src={
          process.env.PUBLIC_URL +
          "/static/images/animation/plate-scroll/Comp 1_00249.png"
        }
      ></img> */}
      <canvas
        ref={canvas}
        width={window.innerWidth}
        height={window.innerWidth * (9 / 16)}
      ></canvas>
      <div className="snap-step"></div>
      <div className="snap-step"></div>
      <div className="snap-step"></div>
      <div className="snap-step"></div>
    </div>
  );
};

export default AnimatedScroll;
