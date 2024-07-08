const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      listCharacters: [],
      listCharacterDetails: {},
      listStarships: [],
      listStarshipDetails: {},
      listPlanets: [],
      listPlanetDetails: {},
      favorites: [],
    },
    actions: {
      getPeople: async (elementType) => {
        try {
          let resp = await fetch(`https://swapi.tech/api/${elementType}`);
          if (!resp.ok) {
            console.error(`Error en la peticion: ${resp.status}`);
            return;
          }
          let data = await resp.json();
          if (elementType === "people") {
            setStore({ listCharacters: data.results });
          }
        } catch (error) {
          console.error(`Error en la promesa: ${error}`);
        }
      },
      getPeopleDetails: async (id) => {
        if (!id) {
          console.error("ID parameter is required");
          return;
        }
        try {
          let resp = await fetch(`https://swapi.tech/api/people/${id}`);
          if (!resp.ok) {
            console.error(`Error in request, status: ${resp.status}`);
            return;
          }
          let data = await resp.json();
          setStore({ listCharacterDetails: data.result.properties });
        } catch (error) {
          console.error("Error in the promise: ", error);
        }
      },
      getStarships: async (elementType) => {
        try {
          let resp = await fetch(`https://swapi.tech/api/${elementType}`);
          if (!resp.ok) {
            console.error(`Error en la peticion: ${resp.status}`);
            return;
          }
          let data = await resp.json();
          if (elementType === "starships") {
            setStore({ listStarships: data.results });
          }
        } catch (error) {
          console.error(`Error en la promesa: ${error}`);
        }
      },
      getStarshipDetails: async (id) => {
        if (!id) {
          console.error("ID parameter is required");
          return;
        }
        try {
          let resp = await fetch(`https://swapi.tech/api/starships/${id}`);
          if (!resp.ok) {
            console.error(`Error in request, status: ${resp.status}`);
            return;
          }
          let data = await resp.json();
          setStore({ listStarshipDetails: data.result.properties });
        } catch (error) {
          console.error("Error in the promise: ", error);
        }
      },
      getPlanets: async (elementType) => {
        try {
          let resp = await fetch(`https://swapi.tech/api/${elementType}`);
          if (!resp.ok) {
            console.error(`Error en la peticion: ${resp.status}`);
            return;
          }
          let data = await resp.json();
          if (elementType === "planets") {
            setStore({ listPlanets: data.results });
          }
        } catch (error) {
          console.error(`Error en la promesa: ${error}`);
        }
      },
      getPlanetDetails: async (id) => {
        if (!id) {
          console.error("ID parameter is required");
          return;
        }
        try {
          let resp = await fetch(`https://swapi.tech/api/planets/${id}`);
          if (!resp.ok) {
            console.error(`Error in request, status: ${resp.status}`);
            return;
          }
          let data = await resp.json();
          setStore({ listPlanetDetails: data.result.properties });
        } catch (error) {
          console.error("Error in the promise: ", error);
        }
      },
      addFavorite: (item, type) => {
        const store = getStore();
        const newItem = { ...item, type };
        if (
          !store.favorites.some(
            (fav) => fav.name === item.name && fav.type === type
          )
        ) {
          setStore({ favorites: [...store.favorites, newItem] });
        }
      },
      removeFavorite: (item) => {
        const store = getStore();
        setStore({
          favorites: store.favorites.filter((fav) => fav.name !== item.name),
        });
      },
    },
  };
};

export default getState;
