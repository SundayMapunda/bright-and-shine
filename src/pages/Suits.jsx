import React from "react";
import SuitOne from "../assets/suit.jpg";
import SuitTwo from "../assets/suit2.jpg";
import SuitThree from "../assets/suit3.jpg";
import SuitFour from "../assets/suit1.jpg";
import { FaWhatsapp } from "react-icons/fa";

const Suits = () => {
  const styleSection = {
    backgroundColor: "rgb(223, 208, 184)",
  };

  return (
    <>
      <section className="py-3" style={styleSection}>
        <div className="d-md-flex mb-4 px-3 add-size">
          <div className="d-md-flex inside">
            <div className="card shadow mb-3 size-cards">
              <img className="card-img-top" src={SuitOne} alt="Card image" />
              <div className="card-body text-center fw-bold">
                <h4 className="card-title">SUIT</h4>
                <p className="card-text">TZS 200,000</p>
                <a
                  href="https://wa.me/25576339010"
                  className="btn btn-success px-5"
                >
                  <FaWhatsapp className="fs-3" />
                </a>
              </div>
            </div>
            <div className="card shadow mb-3 size-cards">
              <img className="card-img-top" src={SuitTwo} alt="Card image" />
              <div className="card-body text-center fw-bold">
                <h4 className="card-title">SUIT</h4>
                <p className="card-text">TZS 200,000</p>
                <a
                  href="https://wa.me/25576339010"
                  className="btn btn-success px-5"
                >
                  <FaWhatsapp className="fs-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="d-md-flex inside">
            <div className="card shadow mb-3 size-cards">
              <img className="card-img-top" src={SuitThree} alt="Card image" />
              <div className="card-body text-center fw-bold">
                <h4 className="card-title">SUIT</h4>
                <p className="card-text">TZS 200,000</p>
                <a
                  href="https://wa.me/25576339010"
                  className="btn btn-success px-5"
                >
                  <FaWhatsapp className="fs-3" />
                </a>
              </div>
            </div>
            <div className="card shadow mb-3 size-cards">
              <img className="card-img-top" src={SuitFour} alt="Card image" />
              <div className="card-body text-center fw-bold">
                <h4 className="card-title">SUIT</h4>
                <p className="card-text">TZS 200,000</p>
                <a
                  href="https://wa.me/25576339010"
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

export default Suits;
