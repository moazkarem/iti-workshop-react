import { useQuery } from "react-query";
const fetchPets = async ({ queryKey }) => {
  const [, { location, animalName, breede }] = queryKey;
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?location=${location}&animal=${animalName}&breed=${breede}`
  );
  const json = await res.json();
  return json;
};
const UsepetsSearchQuery = (searchparams) => {
  return useQuery(["search_pet", searchparams], fetchPets);
};
export default UsepetsSearchQuery;
