import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader";
import UseDetailsByQuery from "../hooks/UseDetailsByQuery";
import Carousel from "../Carousel";

import { lazy, useContext, useState } from "react";
import Addoptedanimal from "../context/Addoptedanimal";
const Modal = lazy(()=>import( "../Modal"))
const Details = () => {
  
  const[showModal , setshowModal] = useState(false)
  const [ , setAddopte] = useContext(Addoptedanimal)
  
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isError, isLoading } = UseDetailsByQuery(id);
  const pet = data?.pets[0];
  return (
    <div className="details">
      {isLoading && (
        <div className="loader-containere">
          <Loader />
        </div>
      )}
      {isError && <h2>{error.message}</h2>}
      {data && (
        <div>
          <Carousel images={pet.images} />
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} __ ${pet.breed} __ ${pet.city}`}</h2>
          <button onClick={()=>setshowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          <button onClick={() => navigate("/")}>Back To Home</button>
          {showModal &&  <Modal>
            <h1>Would You Like To Adopt {pet.name}</h1>
            <div className="buttons">
              <button onClick={()=>{
                setAddopte(pet)
                navigate('/')
              }}>Yes</button>
              <button onClick={()=>setshowModal(false)}>No</button>
            </div>
          </Modal>}
         
        </div>
      )}
    </div>
  );
};
export default Details;
