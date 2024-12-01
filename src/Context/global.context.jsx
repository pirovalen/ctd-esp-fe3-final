/* eslint-disable react/prop-types */
import { createContext, useReducer, useEffect, useMemo } from "react";
import axios from "axios";

// Estado inicial del contexto
export const initialState = {
  theme: "light", // Tema por defecto
  data: [], // Información extraída de la API
};

// Acciones del reducer
const ACTIONS = {
  SET_THEME: "SET_THEME",
  SET_DATA: "SET_DATA",
};

// Reducer para manejar las acciones y actualizar el estado
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case ACTIONS.SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// Contexto global
export const ContextGlobal = createContext(undefined);

// Proveedor de contexto
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Cargar datos de la API al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: ACTIONS.SET_DATA, payload: response.data });
      } catch (error) {
        console.error("Error al obtener los datos de la API", error);
      }
    };

    fetchData();
  }, []);

  // Función para alternar el tema
  const toggleTheme = () => {
    dispatch({ type: ACTIONS.SET_THEME });
  };

  // Usamos useMemo para optimizar la re-renderización del contexto
  const value = useMemo(() => ({
    state,
    toggleTheme,
  }), [state]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
