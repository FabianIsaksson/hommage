import { MutableRefObject, useCallback } from "react";
import LookbookView from "../components/lookbook";
import lookbook from "../static/images/lookbooktest-mobil.jpg";

const book = {
  designerName: "ASLI CÖMERT",
  brandName: "CLAUDE MONTANA",
  image: lookbook,
  slides: 4,
  copy: [
    {
      slide: 1,
      text: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    },
    {
      slide: 2,
      text: "But also the seductive way of using animal prints.",
    },
  ],
  socials: [
    {
      link: "https://www.google.com",
      name: "google",
    },
    {
      link: "https://www.instagram.com/",
      name: "instagram",
    },
  ],
};

const nextBook = {
  designerName: "OTHER NAME",
  brandName: "CLAUDE MONTANA",
  image: lookbook,
  slides: 4,
  copy: [
    {
      slide: 1,
      text: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    },
    {
      slide: 2,
      text: "But also the seductive way of using animal prints.",
    },
  ],
  socials: [
    {
      link: "https://www.google.com",
      name: "google",
    },
    {
      link: "https://www.instagram.com/",
      name: "instagram",
    },
  ],
};

const LookbookPage = () => {
  const onArrowUp = useCallback(() => {
    return;
  }, []);
  const onArrowDown = useCallback(() => {
    return;
  }, []);
  return (
    <LookbookView
      lookbook={book}
      nextLookbook={nextBook}
      onArrowUp={onArrowUp}
      onArrowDown={onArrowDown}
    />
  );
};

export default LookbookPage;
