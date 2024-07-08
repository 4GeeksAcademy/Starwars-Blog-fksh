import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/CharacterCard";

export const CharacterList = () => {
  const { store, actions } = useContext(Context);
  const carouselRef = useRef(null);

  // Scroll to beginning of carousel on component load
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <div className="container">
      <h1>Characters</h1>
      <div className="row">
        <div ref={carouselRef} className="card-carousel">
          {store.listCharacters.map((character, index) => (
            <div key={index} className="card-carousel-item">
              <CharacterCard character={character} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
