import { useEffect, useState } from "react";

const getIsMobile = (w: number) => w < 800;

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: getIsMobile(window.innerWidth),
  });

  useEffect(() => {
    const monitor = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: getIsMobile(window.innerWidth),
      });
    };

    window.addEventListener("resize", monitor);

    return () => {
      window.removeEventListener("resize", monitor);
    };
  }, []);

  return size;
};
