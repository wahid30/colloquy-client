import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { text, image } = data;
  // console.log(text);
  return (
    <div className="w-9/12 mx-auto my-5">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <p>{text}</p>
          <div className="card-actions">
            <label className="swap swap-flip text-2xl">
              <input type="checkbox" />
              <div className="swap-on">👎</div>
              <div className="swap-off">👍</div>
            </label>
          </div>
          <textarea
            className="textarea textarea-primary w-full"
            placeholder="Write Your Comments"
          ></textarea>
          <input className="btn btn-xs" type="submit" value="Send" />
        </div>
      </div>
    </div>
  );
};

export default Details;
