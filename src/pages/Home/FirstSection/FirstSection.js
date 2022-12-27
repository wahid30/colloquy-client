import React from "react";

const FirstSection = () => {
  return (
    <div className="w-9/12 mx-auto my-5">
      <h1>What's on your mind?</h1>
      <div className="border bg-blue-200 p-5 rounded-xl">
        <form action="">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs my-2"
          />
          <br />
          <input
            type="file"
            className="file-input file-input-bordered file-input-info w-full max-w-xs my-2"
          />
          <br />
          <input className="btn btn-info " value="Submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default FirstSection;
