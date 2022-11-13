import { Routes as BrowserRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
import Layout from "../layouts";

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pokemon/:pokemon/:id" element={<PokemonDetail />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<></>} />
      </Route>
    </BrowserRoutes>
  );
};

export default Routes;
