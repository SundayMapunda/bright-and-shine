import React from "react";
import PicOne from "../assets/kiatu11.jpg";
import PicTwo from "../assets/kiatu14.jpg";
import PicThree from "../assets/kiatu18.jpg";
import PicFour from "../assets/kiatu19.jpg";
import PicFive from "../assets/kiatu20.jpg";
import { FaWhatsapp } from "react-icons/fa";

const OfficialShoes = () => {
  const styleSection = {
    backgroundColor: "rgb(223, 208, 184)",
  };
  return (
    <>
      <section className="py-3" style={styleSection}>
        <div className="d-md-flex mb-4 px-3 add-size">
          <div className="d-md-flex inside">
            <div className="card mb-3 shadow size-cards">
              <img className="card-img-top" src={PicOne} alt="Card image" />
              <div className="card-body text-center fw-bold">
                <h4 className="card-title">OFFICIAL SHOES</h4>
                <p className="card-text">TZS 200,000</p>
                <a
                  href="https://wa.me/25576339010"
                  className="btn btn-success px-5"
                >
                  <FaWhatsapp className="fs-3" />
                </a>
              </div>
            </div>
            <div className="card mb-3 shadow size-cards">
              <img className="card-img-top" src={PicTwo} alt="Card image" />
              <div className="card-body text-center fw-bold">
                <h4 className="card-title">OFFICIAL SHOES</h4>
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
            <div className="card mb-3 shadow size-cards">
              <img className="card-img-top" src={PicThree} alt="Card image" />
              <div className="card-body text-center fw-bold">
                <h4 className="card-title">OFFICIAL SHOES</h4>
                <p className="card-text">TZS 200,000</p>
                <a
                  href="https://wa.me/25576339010"
                  className="btn btn-success px-5"
                >
                  <FaWhatsapp className="fs-3" />
                </a>
              </div>
            </div>
            <div className="card mb-3 shadow size-cards">
              <img className="card-img-top" src={PicFour} alt="Card image" />
              <div className="card-body text-center fw-bold">
                <h4 className="card-title">OFFICIAL SHOES</h4>
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

        <div className="d-md-flex justify-content-around mb-4 px-3">
          <div className="card mb-3 shadow size-cards">
            <img className="card-img-top" src={PicFive} alt="Card image" />
            <div className="card-body text-center fw-bold">
              <h4 className="card-title">OFFICIAL SHOES</h4>
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
      </section>
    </>
  );
};

export default OfficialShoes;
