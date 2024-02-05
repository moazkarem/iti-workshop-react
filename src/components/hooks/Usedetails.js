import { useCallback, useEffect, useState } from "react";
const localCash = {};
const Usedetails = (id) => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [pet, setpets] = useState(null);
  const fetcPets = useCallback(async () => {
    try {
      // throw new Error('ooops')
      const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
      const json = await res.json();
      localCash[id] = json.pets[0] || null;
      setpets(localCash[id]);
      setloading(false);
    } catch (error) {
      setError(error.message);
      setloading(false);
    }
  }, [id]);
  useEffect(() => {
    if (!id) {
      setpets(null);
    } else if (localCash[id]) {
      setpets(localCash[id]);
    } else {
      fetcPets();
      setloading(true);
    }
  }, [id, fetcPets]);
  return { pet, loading, error };
};
export default Usedetails;
