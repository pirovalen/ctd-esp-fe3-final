import React, { useEffect, useState } from "react";
import Card from "../Components/Card";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    // Recuperar los dentistas destacados desde localStorage usando la clave "favs"
    const storedDentists = localStorage.getItem("favs");
    if (storedDentists) {
      setDentists(JSON.parse(storedDentists));
    }
  }, []);

  return (
    <>
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
    </>
  );
};

export default Favs;