import React, { useState } from "react";
import { Link } from "react-router-dom";
import Maintenance from "../assets/Maintenance.jpg";
import Computererror from "../assets/Error.jpg";

const ErrorPage = () => {
  const [answer, setAnswer] = useState("");

  const answers = [
    "I am not the only traveller, who has not repaid his debt",
    "Wish I could erase it make your heart believe",
    "I never meant to hurt you",
    "Wish I could fix this, I wish it was that easy",
  ];

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };

  return (
    <section className="bg-light">
      <div className="container text-center py-5 px-4" id="errorpage">
        <div className="col-md-6">
          {/* <img src={Computererror} alt="Computer Error" className="img-fluid" /> */}
          <div className="text-primary">
            SYSTEM UNDER MAINTENANCE <br />
            <small>We will be back soon.</small>
            <br />
            <div className="random-fact">
              <h3>Care for a free fact?</h3>
              <div className="px-3 py-2 rounded bg-warning text-light">
                <p>{answer}</p>
                <button
                  className="btn btn-outline-warning w-50 text-light"
                  onClick={getRandomAnswer}
                >
                  YES
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6" id="topping">
          {/* Use for maintenance */}
          <img src={Maintenance} alt="Maintenance" className="img-fluid" />

          {/* Use to handle page not found */}
          {/* <h1>HMMM IT SEEMS YOU'RE LOST</h1>
          <h2 className="py-3 text-primary fw-bold">
            THERE IS NO AISLE NUMBER YOU'RE LOOKING <br /> 
            WORRY OUT WE CAN GUIDE YOU BACK TO SHOPPING
          </h2>
          <Link to="/" className="btn btn-outline-primary">
            TAKE ME BACK
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
