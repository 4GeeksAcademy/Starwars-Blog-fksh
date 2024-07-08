import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const ViewPlanetDetails = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams(); // Get the id from the URL

  useEffect(() => {
    if (id) {
      actions.getPlanetDetails(id); // Fetch details for the given id
    }
  }, [id]);

  const details = store.listPlanetDetails;

  return (
    <div>
      {details ? (
        <div>
          <h1>{details.name}</h1>
          <p>Climate: {details.climate}</p>
          <p>Population: {details.population}</p>
          <p>Terrain: {details.terrain}</p>
          <p>Gravity: {details.gravity}</p>
          <p>Diameter: {details.diameter}</p>
          <p>Surface Water: {details.surface_water}</p>
          <p>Rotation Period: {details.rotation_period}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
