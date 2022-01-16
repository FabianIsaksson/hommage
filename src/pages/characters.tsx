import CharacterSelect, { Character } from "../components/character-select";
import testBlue from "../static/images/test_blue.jpg";
import testWhite from "../static/images/test_white.jpg";
import testLeopard from "../static/images/test_leopard.jpg";
import montana from "../static/images/brand-logos/montana.png";
import lundin from "../static/images/brand-logos/lundin.png";
import sightsen from "../static/images/brand-logos/sightsen.png";
import CharacterView from "../components/character-view";
import { useCallback, useState } from "react";
import { useDisableUserScroll } from "../hooks/useDisableUserScroll";

const characters = [
  {
    characterId: 0,
    brandLogo: sightsen,
    names: ["MAYA SUNDHOLM"],
    image: testBlue,
  },
  {
    characterId: 1,
    brandLogo: lundin,
    names: ["HILDA FERM", "THOMAS WIESER"],
    image: testWhite,
  },
  {
    characterId: 2,
    brandLogo: montana,
    names: ["ASLI CÖMERT", "THOMAS WIESER"],
    image: testBlue,
  },
  {
    characterId: 3,
    brandLogo: sightsen,
    names: ["ISABELLE SJÖMAN", "THOMAS WIESER"],
    image: testLeopard,
  },
  {
    characterId: 4,
    brandLogo: montana,
    names: ["SAMUEl WESTERBERG", "THOMAS WIESER"],
    image: testBlue,
  },
  {
    characterId: 5,
    brandLogo: lundin,
    names: ["KEVIN NILSSON", "THOMAS WIESER", "OTHER NAME"],
    image: testLeopard,
  },
];

const Characters = () => {
  useDisableUserScroll();
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  const onCharacterSelect = useCallback((character: Character) => {
    setSelectedCharacter(character);
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }, []);

  return (
    <div>
      <CharacterSelect characters={characters} onSelect={onCharacterSelect} />
      {selectedCharacter && <CharacterView />}
    </div>
  );
};

export default Characters;
