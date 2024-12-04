/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {
  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || []; 
    const alreadyFav = favs.some((fav) => fav.id === id); 
    if (!alreadyFav) {
      favs.push({ name, username, id }); 
      localStorage.setItem("favs", JSON.stringify(favs)); 
      alert("Added to favorites!");
    } else {
      alert("This card is already in favorites!");
    }
  };

  return (
    <div className="card">
      <img src="/public/images/doctor.jpg" className="cardImage" />
      <h2>{name}</h2>
      <p>{username}</p>
      

      {/* <Link to={`/dentist/${id}`} className="detailsLink">
        View Details
      </Link> */}

      <button onClick={addFav} className="favButton">
      <img src="/images/star-solid.svg" alt="Add to favorites" width="24" height="24" /> 
      </button>
    </div>
  );
};

export default Card;

