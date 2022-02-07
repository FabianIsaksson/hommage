import "./collection.scss";
import { useEffect, useMemo, useState } from "react";
import { collectionHighlights } from "../Frame/lookbook-images";
import debounce from "lodash.debounce";
import { useWindowSize } from "../../hooks/useWindowSize";

const Collection = () => {
  // Preload images
  useEffect(() => {
    collectionHighlights.forEach((pic) => {
      const img = new Image();
      img.src = pic;
    });
  }, [collectionHighlights]);

  const windowSize = useWindowSize();
  const selection = useMemo(() => {
    // Shuffle array
    const shuffled = collectionHighlights.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 3);
    return selected;
  }, []);

  const rotations = [-2, 10, 5];

  const restingPositionsMobile = ["-50%, -50%", "-45%, -52%", "-62%, -62%"];
  const restingPositionsDesktop = ["-50%, -50%", "-30%, -60%", "-70%, -80%"];
  const hoverPositions = ["-70%, -50%", "-40%, -55%", "-50%, -70%"];

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const debouncedSetHover = useMemo(() => {
    if (windowSize.isMobile) {
      return () => {};
    }
    return debounce(setHoveredItem, 100);
  }, []);

  const restingPositions = windowSize.isMobile
    ? restingPositionsMobile
    : restingPositionsDesktop;

  return (
    <div className="collection">
      {selection.map((image, i) => (
        <img
          key={i}
          onMouseOver={() => debouncedSetHover(i)}
          onMouseOut={() => debouncedSetHover(null)}
          style={{
            zIndex: hoveredItem === i ? 20 : 3 - i,
            transform:
              hoveredItem !== null
                ? `translate3d(${hoverPositions[i]}, 0) rotate(${rotations[i]}deg)`
                : `translate3d(${restingPositions[i]}, 0) rotate(${rotations[i]}deg)`,
          }}
          className="collection-image"
          alt="view collections"
          src={image}
        ></img>
      ))}
    </div>
  );
};

export default Collection;
