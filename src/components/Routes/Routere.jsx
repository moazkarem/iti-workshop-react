import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Searchparams from "../pages/Searchparams";
import Details from "../pages/Details";
import Notfound from "../pages/Notfound";
const Routere = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<Searchparams />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </>
  )
);

export default Routere;
