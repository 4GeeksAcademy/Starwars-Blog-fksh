import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { PlanetCard } from "../component/PlanetCard";

export const PlanetList = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1>Planets</h1>
      <div className="row">
        {store.listPlanets.map((planets, index) => (
          <div key={index} className="col-md-4">
            <PlanetCard planets={planets} />
          </div>
        ))}
      </div>
    </div>
  );
};
