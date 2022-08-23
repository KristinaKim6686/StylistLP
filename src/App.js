import React from "react";
// import axios from "axios";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./App.styled";
import { Layout } from "./components/Layout/Layout";
import { HomeView } from "./views/HomeView";
import { ColoristicsGalery } from "./components/Coloristic/ColoristicsGalery";

const Coloristic = lazy(() => import("./views/Coloristic"));
// const ColoristicsGalery = lazy(() =>
//   import("./components/Coloristic/ColoristicsGalery")
// );

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Suspense fallback={<>Loadding...</>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomeView />} />
            <Route path="color" element={<Coloristic />} />
            <Route path="color/:galery" element={<ColoristicsGalery />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
