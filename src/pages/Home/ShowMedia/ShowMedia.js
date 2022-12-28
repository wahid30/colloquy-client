import React from "react";
import { Link } from "react-router-dom";

const ShowMedia = ({ uMedia }) => {
  // console.log(uMedia);
  const { _id, text, image } = uMedia;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p>{text}</p>
        <div className="card-actions justify-end">
          <Link to={`/colloquyUser/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowMedia;
