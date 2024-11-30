import { Link } from "react-router-dom";
import "../styles/index.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/"><h4>Inicio</h4></Link>
      <Link to="/contact"><h4>Contacto</h4></Link>
      <Link to="/dentist/:id"><h4>Detalle Dentista</h4></Link>
      <Link to="/favs"><h4>Destacados</h4></Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar