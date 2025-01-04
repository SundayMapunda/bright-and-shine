import React from "react";
import "./App.css";
import Brands from "./componentsUI/Brands.jsx";
import Advertise from "./componentsUI/Advertise.jsx";
import Showbrand from "./componentsUI/Showbrand.jsx";

const App = () => {
  return (
    <>
      <Showbrand />
      <Brands />
      <Advertise />
    </>
  );
};

export default App;
