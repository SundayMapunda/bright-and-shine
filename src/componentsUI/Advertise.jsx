import React from "react";
import Dress from "../assets/dress1.jpg";
import Suit from "../assets/suit.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Advertise = () => {
  function peek() {
    alert("Ahem! so I need you to calm down and slowly press the OK button.");
  }

  return (
    <section className="ads outfit">
      <div className="one-card d-md-flex justify-content-around px-4">
        <div className="mx-2 p-3 see">
          <p className="display-3">Discover your style!</p>
          <p className="display-6">
            Look at our collection of <br />{" "}
            <b> clothes, accessories, shoes </b> and <b> phones </b> <br />
            that reflect the latest trends and timeless classic
          </p>
          <p className="display-6">
            We have something for everyone, everywhere.
          </p>
        </div>

        <div className="card img-respond my-4 mx-3 border-0 shadow-lg">
          <img className="card-img-top" src={Dress} alt="Card image" />
          <div className="card-body">
            <Link to="dress" className="stretched-link"></Link>
            <h4 className="card-title">Women</h4>
          </div>
        </div>
      </div>

      <div className="one-card d-md-flex justify-content-around mt-3 px-4">
        <div className="card ads my-4 mx-3 border-0 shadow">
          <img className="card-img-top" src={Suit} alt="Card image" />
          <div className="card-body">
            <Link to="suits" className="stretched-link"></Link>
            <h4 className="card-title">Men</h4>
          </div>
        </div>

        <div className="explore">
          <h3>
            <b>
              At Bright & Shine, we believe that fashion is an expression of who
              you are.
            </b>
          </h3>
          <p className="fs-4">
            Our carefully selected pieces are designed to empower you, bringing
            out your individuality. <br />
            Explore our diverse range of products and find the perfect addition
            to your wardrobe!
          </p>
          <center>
            <button onClick={peek} className="btn btn-primary mb-4">
              EXPLORE <FaArrowRight />
            </button>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
