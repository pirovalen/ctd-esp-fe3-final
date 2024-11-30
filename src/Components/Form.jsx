/* eslint-disable react/prop-types */
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (user.nombre.length >= 5 && emailRegex.test(user.email)) {
      onSubmit(user); 
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input
        type="text"
        onChange={(event) =>
          setUser({ ...user, nombre: event.target.value })
        }/>
      <label>Email</label>
      <input
        type="text"
        onChange={(event) =>
          setUser({ ...user, email: event.target.value })
        }/>
      <button>Enviar</button>
      {error && (
        <h4 style={{ color: "red" }}>
          Por favor verifica tu información nuevamente.
        </h4>
      )}
    </form>
  );
};

export default Form;
