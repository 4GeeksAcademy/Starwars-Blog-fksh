import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/CharacterCard";

export const CharacterList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople("people");
  }, []);

  useEffect(() => {
    console.log("Store listCharacters:", store.listCharacters); // Debugging line
  }, [store.listCharacters]);

  return (
    <div className="container">
      <h1>Characters</h1>
      <div className="row">
        {store.listCharacters.map((character, index) => (
          <div key={index} className="col-md-4">
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};
