import { useEffect, useState } from "react";

const Usepeets = (location , animalName ,breede)=>{
    const[pets , setpets] = useState([])
    useEffect(() => {
        const getdat = async () => {
          const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?location=${location}&animal=${animalName}&breed=${breede}`
          );
          const data = await res.json();
          setpets(data.pets);
        };
        getdat();
      }, [location, animalName, breede]);
    return pets
}

export default Usepeets