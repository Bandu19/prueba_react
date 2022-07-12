// RUTA MADRE o ROUTER PADRE
import { Route, Routes } from "react-router";
//
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";

// import { DcPage } from "../heroes/pages/DcPage";
// import { MarvelPage } from "../heroes/pages/MarvelPage";

//

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
