import { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { GlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [dentists, setDentists] = useState([]);
  const { state } = useContext(GlobalStates);

  useEffect(() => {
    const storedDentists = localStorage.getItem("favs");
    console.log("Contenido de favs en localStorage:", storedDentists);
    if (storedDentists) {
      setDentists(JSON.parse(storedDentists));
    }
  }, []);
  const handleClearFavorites = () => {
    localStorage.removeItem("favs"); // Borra los favoritos del localStorage
    setDentists([]); // Limpia el estado local
  };

  return (
    <main className={state.theme === "dark" ? "dark" : "light"}> 
      <h1>Dentists Favs</h1>
      <button onClick={handleClearFavorites}>Limpiar Favoritos</button>
      <div className="card-grid">
        {dentists.length > 0 ? (
          dentists.map((dentist, index) => (
            <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
          ))
        ) : (
          <p>No hay dentistas destacados.</p>
        )}
      </div>
    </main>
    
  );
};

export default Favs;