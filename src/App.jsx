import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Addoptedanimal from "./components/context/Addoptedanimal";
import { Suspense, lazy, useState } from "react";
import Loader from "./components/Loader";

 const Details = lazy(()=>import("./components/pages/Details"))
 const Searchparams = lazy(()=>import("./components/pages/Searchparams"))
 const Notfound = lazy(()=>import("./components/pages/Notfound"))

const queryClient = new QueryClient();
const App = () => {
  const addopted = useState(null)
  return (
    <div>
      <BrowserRouter>
      <Addoptedanimal.Provider value={addopted}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div className="main-loadin-cont">
            <Loader />
          </div>}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Searchparams />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          </Suspense>
        </QueryClientProvider>
        </Addoptedanimal.Provider>
      </BrowserRouter>
    </div>
  );
};
export default App;
