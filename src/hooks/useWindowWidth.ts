import { useEffect, useRef } from "react";

const getIsMobile = (w: number) => w < 800;

export const useWindowWidth = () => {
  const size = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: getIsMobile(window.innerWidth),
  });

  useEffect(() => {
    const monitor = () => {
      size.current.width = window.innerWidth;
      size.current.height = window.innerHeight;
      size.current.isMobile = getIsMobile(window.innerWidth);
    };

    window.addEventListener("resize", monitor);

    return () => {
      window.removeEventListener("resize", monitor);
    };
  }, []);

  return size.current;
};
