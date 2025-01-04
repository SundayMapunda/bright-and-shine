import React from "react";
import Hermes from "../assets/Hermes.png";
import Balenciaga from "../assets/Balenciaga.jpg";
import Gucci from "../assets/Gucci.jpg";
import Louisvuitton from "../assets/Louisvuitton.jpg";

const Brands = () => {
  function peeking() {
    alert(
      "Take a seat and reason with me: WHAT DID YOU EXPECT TO FIND WHEN YOU CLICKED HERE?"
    );
  }
  return (
    <section className="py-2 bg-white">
      <div className="brands px-2" onClick={peeking}>
        <h3 className="px-2 outfit">TOP BRANDS</h3>
        <div className="big d-md-flex">
          <img src={Gucci} alt="Gucci" className="logo" />
          <img src={Hermes} alt="Hermes" className="logo" />
          <img src={Balenciaga} alt="Balenciaga" className="logo" />
          <img src={Louisvuitton} alt="Louisvuitton" className="logo" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
