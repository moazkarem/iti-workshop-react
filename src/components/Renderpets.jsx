/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import NamePets from "./NamePets";
import Loader from "./Loader";
const Renderpets = ({ petsData }) => {
  return (
    <div>
      <div className="search">
        {petsData.length ? (
          petsData.map((pet) => (
            <div key={pet.id}>
              <NamePets
              id={pet.id}
                name={pet.name}
                breed={pet.breed}
                animal={pet.animal}
                images={pet.images}
                city={pet.city}
              />
            </div>
          ))
        ) : (
          <div className="loader-containere">
            <Loader />
            </div>
        )}
      </div>
    </div>
  );
};
export default Renderpets;
