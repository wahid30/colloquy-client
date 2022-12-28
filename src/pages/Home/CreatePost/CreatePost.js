import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const CreatePost = () => {
  return (
    <div className="w-9/12 mx-auto my-5">
      <Link to="/firstSection" className="btn  btn-outline btn-primary">
        What's on your mind ?
      </Link>
    </div>
  );
};

export default CreatePost;
