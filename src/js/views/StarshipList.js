import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { StarshipCard } from "../component/StarshipCard";

export const StarshipList = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1>Starships</h1>
      <div className="row">
        {store.listStarships.map((starships, index) => (
          <div key={index} className="col-md-4">
            <StarshipCard starships={starships} />
          </div>
        ))}
      </div>
    </div>
  );
};
