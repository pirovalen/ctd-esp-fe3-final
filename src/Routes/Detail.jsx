//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalStates } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams(); 
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { state } = useContext(GlobalStates);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener los datos del dentista.");
        }
        const data = await response.json();
        setDentist(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDentist();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className={state.theme === "dark" ? "dark" : "light"}> 
      <h1>Detalle del Dentista</h1>
      {dentist ? (
        <div>
          <p><strong>Nombre:</strong> {dentist.name}</p>
          <p><strong>Correo electrónico:</strong> {dentist.email}</p>
          <p><strong>Teléfono:</strong> {dentist.phone}</p>
          <p><strong>Sitio web:</strong> <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
        </div>
      ) : (
        <p>No se encontró información para el dentista con ID: {id}</p>
      )}
    </main>
  );
};

export default Detail;
