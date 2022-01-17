import CharacterSelect, { Character } from "../components/character-select";
import testBlue from "../static/images/test_blue.jpg";
import testWhite from "../static/images/test_white.jpg";
import testLeopard from "../static/images/test_leopard.jpg";
import montana from "../static/images/brand-logos/montana.png";
import lundin from "../static/images/brand-logos/lundin.png";
import sightsen from "../static/images/brand-logos/sightsen.png";
import CharacterView from "../components/character-view";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDisableUserScroll } from "../hooks/useDisableUserScroll";
import "./characters.scss";

const characters = [
  {
    characterId: 0,
    brandLogo: sightsen,
    names: ["MAYA SUNDHOLM"],
    image: testBlue,
    description:
      "Biba was a brand and fashion store of the 1960s and 1970s, known as ”the theatre for fashion”. It was established by Barbara Hulanicki with help of her husband Stephen Fitz-Simon and together they attracted up to a million customers weekly, making it one of the most visited tourist attractions in London. Her store was a place for ‘groovy’ individuals, with loud music and lavishing decadent.",
  },
  {
    characterId: 1,
    brandLogo: lundin,
    names: ["HILDA FERM", "THOMAS WIESER"],
    image: testWhite,
    description:
      "Biba was a brand and fashion store of the 1960s and 1970s, known as ”the theatre for fashion”. It was established by Barbara Hulanicki with help of her husband Stephen Fitz-Simon and together they attracted up to a million customers weekly, making it one of the most visited tourist attractions in London. Her store was a place for ‘groovy’ individuals, with loud music and lavishing decadent.",
  },
  {
    characterId: 2,
    brandLogo: montana,
    names: ["ASLI CÖMERT", "THOMAS WIESER"],
    image: testBlue,
    description:
      "Biba was a brand and fashion store of the 1960s and 1970s, known as ”the theatre for fashion”. It was established by Barbara Hulanicki with help of her husband Stephen Fitz-Simon and together they attracted up to a million customers weekly, making it one of the most visited tourist attractions in London. Her store was a place for ‘groovy’ individuals, with loud music and lavishing decadent.",
  },
  {
    characterId: 3,
    brandLogo: sightsen,
    names: ["ISABELLE SJÖMAN", "THOMAS WIESER"],
    image: testLeopard,
    description:
      "Biba was a brand and fashion store of the 1960s and 1970s, known as ”the theatre for fashion”. It was established by Barbara Hulanicki with help of her husband Stephen Fitz-Simon and together they attracted up to a million customers weekly, making it one of the most visited tourist attractions in London. Her store was a place for ‘groovy’ individuals, with loud music and lavishing decadent.",
  },
  {
    characterId: 4,
    brandLogo: montana,
    names: ["SAMUEl WESTERBERG", "THOMAS WIESER"],
    image: testBlue,
    description:
      "Biba was a brand and fashion store of the 1960s and 1970s, known as ”the theatre for fashion”. It was established by Barbara Hulanicki with help of her husband Stephen Fitz-Simon and together they attracted up to a million customers weekly, making it one of the most visited tourist attractions in London. Her store was a place for ‘groovy’ individuals, with loud music and lavishing decadent.",
  },
  {
    characterId: 5,
    brandLogo: lundin,
    names: ["KEVIN NILSSON", "THOMAS WIESER", "OTHER NAME"],
    image: testLeopard,
    description:
      "Biba was a brand and fashion store of the 1960s and 1970s, known as ”the theatre for fashion”. It was established by Barbara Hulanicki with help of her husband Stephen Fitz-Simon and together they attracted up to a million customers weekly, making it one of the most visited tourist attractions in London. Her store was a place for ‘groovy’ individuals, with loud music and lavishing decadent.",
  },
];

const Characters = () => {
  useDisableUserScroll();
  const selectRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedCharacter, setSelectedCharacter] =
    useState<Character | null>();

  const [listenScroll, setListenScroll] = useState(false);

  useEffect(() => {
    const exit = () => {
      if (pageRef.current && listenScroll && pageRef.current.scrollTop === 0) {
        onCharacterExit();
      }
    };

    pageRef.current?.addEventListener("scroll", exit);
    return () => {
      pageRef.current?.removeEventListener("scroll", exit);
    };
  }, [listenScroll]);

  const onCharacterSelect = useCallback(
    (character: Character) => {
      setSelectedCharacter(character);
      const y = selectRef.current?.getBoundingClientRect().y;
      pageRef.current?.scrollTo({
        top: y,
        left: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        pageRef.current?.classList.add("scroll-snap-y");
        setListenScroll(true);
      }, 500);
    },
    [pageRef],
  );

  const onCharacterExit = useCallback(() => {
    if (pageRef.current?.scrollTop !== 0) {
      pageRef.current?.classList.remove("scroll-snap-y");
      pageRef.current?.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        setSelectedCharacter(null);
      }, 468);
    } else {
      setSelectedCharacter(null);
    }
    setListenScroll(false);
  }, [pageRef]);

  return (
    <div ref={pageRef} className="characters-page">
      <CharacterSelect
        characters={characters}
        onSelect={onCharacterSelect}
        selected={!!selectedCharacter}
      />
      {selectedCharacter && (
        <div ref={selectRef}>
          <CharacterView
            character={selectedCharacter}
            onExit={onCharacterExit}
          />
        </div>
      )}
    </div>
  );
};

export default Characters;
