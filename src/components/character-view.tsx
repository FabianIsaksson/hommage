import ArrowButton from "./arrow-button";
import { Character } from "./character-select";
import "./character-view.scss";

const CharacterView = ({ character }: { character: Character }) => {
  return (
    <div className="character-view">
      <ArrowButton direction="up" text="REVEAL CHARACTERS" />
      <div className="character-view-content">
        <img
          className="character-view-logo"
          src={character.brandLogo}
          alt="character-view-logo"
        ></img>
        <div className="character-view-description">
          {character.description}
        </div>
      </div>
      <div className="character-view-bottom">
        <div className="character-view-names">
          {character.names.map((name) => (
            <p key={name} className="character-view-names-name">
              {name}
            </p>
          ))}
        </div>
        <ArrowButton direction="down" text="VIEW COLLECTIONS" />
      </div>
    </div>
  );
};

export default CharacterView;
