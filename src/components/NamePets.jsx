/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";
const NamePets = ({ name, breed, animal, images, city, id }) => {
  let imagePlacholder = "loading image animals";
  if (images.length) {
    imagePlacholder = images[0];
  }
  return (
    <Link to={`/details/${id}`}>
      <div className="pet">
        <div className="image-container">
          <img src={imagePlacholder} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} __ ${breed} __ ${city}`}</h2>
        </div>
      </div>
    </Link>
  );
};
export default NamePets;
