import React from "react";
import logo from "../../../assests/OIP.jpeg";

const Communicaitons = () => {
  return (
    <div className="w-[90%] mx-auto my-5">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img className="rounded-xl" src={logo} alt="" />
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Ready</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communicaitons;
