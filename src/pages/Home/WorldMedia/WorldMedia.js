import React from "react";
import logo from "../../../assests/R.jpeg";

const WorldMedia = () => {
  return (
    <div className="w-[80%] mx-auto my-5">
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={logo}
            className="max-w-sm w-full rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-2xl font-bold">
              We Will Help You To Grow Your Business
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut id
              eu elit augue felis. Penatibus in erat sed id massa, feugiat. Quam
              nulla facilisi sed faucibus lacus consequat malesuada.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMedia;
