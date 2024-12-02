import { Link } from "react-router-dom";
import { useContext } from "react"; 
import { GlobalStates } from "./utils/global.context"; 
import "../styles/index.css";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalStates); 

  const handleThemeChange = () => {
    dispatch({ type: "TOGGLE_THEME" }); 
  };

  return (
    <nav className={state.theme}> 
      <Link to="/"><h4>Inicio</h4></Link>
      <Link to="/contact"><h4>Contacto</h4></Link>
      <Link to="/dentist/:id"><h4>Detalle Dentista</h4></Link>
      <Link to="/favs"><h4>Destacados</h4></Link>

      <button onClick={handleThemeChange}>Change theme</button>
    </nav>
  );
};

export default Navbar;


