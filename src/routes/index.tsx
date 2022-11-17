import { Routes as BrowserRoutes, Route, useLocation } from "react-router-dom";
import Home from "@pages/Home";
import PokeFriends from "@pages/PokeFriends";
import PokemonDetail from "@pages/PokemonDetail";
import Layout from "@layouts/index";
import React, { useLayoutEffect } from "react";

const Routes = () => {
  const ScrollToTopWrapper: React.FunctionComponent<{
    children: React.ReactNode;
  }> = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return <>{children}</>;
  };

  return (
    <ScrollToTopWrapper>
      <BrowserRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokefriends" element={<PokeFriends />} />
          <Route path="pokemon/:pokemon/:id" element={<PokemonDetail />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<></>} />
        </Route>
      </BrowserRoutes>
    </ScrollToTopWrapper>
  );
};

export default Routes;
