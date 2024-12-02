import { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { GlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [dentists, setDentists] = useState([]);
  const { state } = useContext(GlobalStates);

  useEffect(() => {
    // Recuperar los dentistas destacados desde localStorage usando la clave "favs"
    const storedDentists = localStorage.getItem("favs");
    if (storedDentists) {
      setDentists(JSON.parse(storedDentists));
    }
  }, []);

  return (
    <main className={state.theme === "dark" ? "dark" : "light"}> 
      <h1>Dentists Favs</h1>
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