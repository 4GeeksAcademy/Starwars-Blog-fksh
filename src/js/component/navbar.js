import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Starwars Blog</span>
      </Link>
      <div className="ml-auto">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
            {store.favorites.length > 0 ? (
              store.favorites.map((favorite, index) => (
                <li key={index}>
                  <a className="dropdown-item" href="#">
                    {favorite.name} ({favorite.type})
                  </a>
                </li>
              ))
            ) : (
              <li>
                <span className="dropdown-item">No favorites added</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
