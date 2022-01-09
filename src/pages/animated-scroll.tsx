import { useEffect, useRef } from "react";
import "./animated-scroll.scss";
/*
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 148;
const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=1158;
canvas.height=770;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()

*/

const AnimatedScroll = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  const frameCount = 249;

  const currentFrame = (index: number) =>
    `/static/images/animation/plate-scroll/ps-${index
      .toString()
      .padStart(3, "0")}.png`;

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

      const preloadImages = () => {
        for (let i = 1; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
        }
      };

      preloadImages();
    }
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
