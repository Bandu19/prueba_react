// RUTA HIJO

import { Navigate, Route, Routes } from "react-router";
import { DcPage, HeroPages, MarvelPage, SearchPage } from "../pages";
import { Navbar } from "../../ui";
// import { SearchPages } from "../pages/SearchPages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          {/* MANDAR UN COMODIN ES DECIR UN SEGMENTO */}
          <Route path="hero/:id" element={<HeroPages />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
