import React from "react";
//{useState}
import {Link} from "react-router-dom";
//import Maintenance from "../assets/Maintenance.jpg";
import Computererror from "../assets/Error.jpg";

const ErrorPage = () => {
  {/*const [answer, setAnswer] = useState("");

  const answers = [
    "Octopuses have three hearts: Two pump blood to the gills and one pumps blood to the rest of the body.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Who is older between Sharks and Trees?: Sharks.",
    "Bananas are berries, strawberries are not.",
    "Sloths can hold their breath longer than dolphins.",
  ];

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };*/}

  return (
    <section className="bg-light">
      <div className="container text-center py-5 px-4" id="errorpage">
        <div className="col-md-6">
          <img src={Computererror} alt="Computer Error" className="img-fluid" />
          {/* <div className="text-primary">
            <span className="fs-1 fw-bold">UNDER MAINTENANCE</span>
            <br />
            <span>"I wil be back" - Terminator</span>
            <br />
            <div className="random-fact mt-5">
              <h4>Care for a free fact?</h4>
              <div className="px-3 py-2 rounded bg-warning text-light">
                <p>{answer}</p>
                <button
                  className="btn btn-outline-primary w-50 text-light"
                  onClick={getRandomAnswer}
                >
                  YES
                </button>
              </div>
            </div>
          </div>*/}
        </div>
        <div className="col-md-6 px-2" id="topping">
          {/* Use for maintenance */}
          {/* <img src={Maintenance} alt="Maintenance" className="img-fluid" />*/}

          {/* Use to handle page not found */}
          <h1>OOPS! LOOKS LIKE YOU TOOK A WRONG TURN</h1>
          <h2 className="py-3 text-primary fw-bold">
            We searched high and low...
          </h2>
          <h3 className="py-3 text-primary fw-bold">
            This link must have been 'out of stock'
          </h3>
          <Link to="/bright-and-shine" className="btn btn-outline-primary">
            BACK TO SHOPPING
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
