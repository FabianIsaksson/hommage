import { useEffect } from "react";

export const useDisableUserScroll = () => {
  document.body.addEventListener(
    "touchmove",
    function (event) {
      event.preventDefault();
      event.stopPropagation();
    },
    false,
  );

  useEffect(() => {
    document.body.classList.add("disable-touch-scroll");

    return () => {
      document.body.classList.remove("disable-touch-scroll");
    };
  }, []);
};
