import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const ViewCharacterDetails = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams(); // Get the id from the URL

  useEffect(() => {
    if (id) {
      actions.getPeopleDetails(id); // Fetch details for the given id
    }
  }, [id]);

  const details = store.listCharacterDetails;

  return (
    <div>
      {details ? (
        <div>
          <h1>{details.name}</h1>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt={`${details.name} Image`}
            className="img-fluid"
          />
          <p>Height: {details.height}</p>
          <p>Mass: {details.mass}</p>
          <p>Hair Color: {details.hair_color}</p>
          <p>Skin Color: {details.skin_color}</p>
          <p>Eye Color: {details.eye_color}</p>
          <p>Birth Year: {details.birth_year}</p>
          <p>Gender: {details.gender}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
