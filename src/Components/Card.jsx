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
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76U1rKRwl1aQdVAFdJT0dDmNETyZCqiARbRZqMWpgjuby78XGe2KNPGCcz4yVkzSd2xg&usqp=CAU"} className="cardImage" />
      <h2>{name}</h2>
      <p>Username: {username}</p>
      <p>ID: {id}</p>

      <Link to={`/dentist/${id}`} className="detailsLink">
        View Details
      </Link>

      <button onClick={addFav} className="favButton">
        Add to Favorites
      </button>
    </div>
  );
};

export default Card;

