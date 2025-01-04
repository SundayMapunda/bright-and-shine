import React from "react";
import DressOne from "../assets/dress1.jpg";
import DressTwo from "../assets/dress.jpg";
import { FaWhatsapp } from "react-icons/fa";

const Dress = () => {
  const styleSection = {
    backgroundColor: "rgb(223, 208, 184)",
  };

  return (
    <>
      <section className="py-3" style={styleSection}>
        <div className="d-md-flex mb-4 px-3 add-size">
          <div className="d-md-flex inside">
            <div className="card mb-3 size-cards">
              <img className="card-img-top" src={DressOne} alt="Card image" />
              <div className="card-body text-center fw-bold">
                <h4 className="card-title">DRESS</h4>
                <p className="card-text">TZS 200,000</p>
                <a
                  href="https://wa.me/255763390105"
                  className="btn btn-success px-5"
                >
                  <FaWhatsapp className="fs-3" />
                </a>
              </div>
            </div>
            <div className="card mb-3 size-cards">
              <img className="card-img-top" src={DressTwo} alt="Card image" />
              <div className="card-body text-center fw-bold">
                <h4 className="card-title">DRESS</h4>
                <p className="card-text">TZS 200,000</p>
                <a
                  href="https://wa.me/255763390105"
                  className="btn btn-success px-5"
                >
                  <FaWhatsapp className="fs-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dress;
