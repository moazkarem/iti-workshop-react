import { useContext, useState } from "react";
import Renderpets from "../Renderpets";
import UseBreedsByQuery from "../hooks/UseBreedsByQuery";
import UsepetsSearchQuery from "../hooks/UsepetsSearchQuery";
import Addoptedanimal from "../context/Addoptedanimal";
const Searchparams = () => {
  const [searchparams, setsearchparams] = useState({
    location: "",
    animalName: "",
    breede: "",
  });
  const breedsQuery = UseBreedsByQuery(searchparams.animalName);
  const breeds = breedsQuery?.data?.breeds ?? [];
  const animals = ["bird", "cat", "dog", "rabbit", "reptile"];
  const petQuery = UsepetsSearchQuery(searchparams);
  const petsData = petQuery?.data?.pets ?? [];

  const [addoptValue , ] = useContext(Addoptedanimal)
  console.log(addoptValue);
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const animalName = formData.get("animalName");
          const location = formData.get("location");
          const breede = formData.get("breede");
          setsearchparams({ animalName, location, breede });
        }}
      >
        {addoptValue && <div className="pet image-container">
          <img src={addoptValue.images[0]} alt="animals" />
        </div>}
        <label htmlFor="location">
          Locatin :
          <input id="location" placeholder="Location" name="location" />
        </label>
        <label htmlFor="animls">
          Animals
          <select
            name="animalName"
            onChange={(e) => {
              setsearchparams({
                ...searchparams,
                animalName: e.target.value,
                breede: "",
              });
            }}
          >
            <option />
            {animals.map((animal, idx) => (
              <option key={idx} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          breeds
          <select disabled={!breeds.length} name="breede">
            <option />
            {breeds.map((breed, idx) => (
              <option key={idx} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Renderpets petsData={petsData} />
    </div>
  );
};
export default Searchparams;
