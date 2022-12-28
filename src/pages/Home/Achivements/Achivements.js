import React from "react";
import logo from "../../../assests/achiments.jpeg";

const Achivements = () => {
  return (
    <div className="w-[80%] mx-auto my-5">
      <div>
        <div className="hero-content flex-col lg:flex-row">
          <img src={logo} className="max-w-sm rounded-lg w-full" alt="" />
          <div className="py-5">
            <h1 className="text-2xl font-bold">Some Of The Award We Got</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              vitae nulla facilisi nunc mattis. Amet, morbi viverra cursus urna
              quis pretium pellentesque. Eget lacus morbi ac, pretium amet sem
              penatibus at commodo.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
