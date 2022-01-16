import { useEffect } from "react";

export const useDisableUserScroll = () => {
  useEffect(() => {
    document.body.classList.add("disable-touch-scroll");

    return () => {
      document.body.classList.remove("disable-touch-scroll");
    };
  }, []);
};
