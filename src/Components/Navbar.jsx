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
      <h4 style={{ position: "absolute", left: "4vw"}}>
        <span style={{ color: "red" }}>D</span>H Odonto
      </h4>

      <Link to="/"><h4>Home</h4></Link>
      <Link to="/contact"><h4>Contacts</h4></Link>
      <Link to="/favs"><h4>Favs</h4></Link>

      <button onClick={handleThemeChange} className="theme-button">
        <img className="theme-icon"
        src={state.theme === "dark" ? "/images/sun-solid.svg" : "/images/moon-solid.svg"}
        alt="Change theme"/>
      </button>
    </nav>
  );
};

export default Navbar;


