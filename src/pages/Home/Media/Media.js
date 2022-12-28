import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import ShowMedia from "../ShowMedia/ShowMedia";

const Media = () => {
  const [userMedia, setUserMedia] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/colloquyUser")
      .then((res) => res.json())
      .then((data) => setUserMedia(data));
  }, []);
  return (
    <div className="w-9/12 mx-auto my-5">
      <h2 className="text-center">All Media: {userMedia?.length}</h2>
      <div className="my-2 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {userMedia?.map((uMedia) => (
          <ShowMedia uMedia={uMedia} key={uMedia._id}></ShowMedia>
        ))}
      </div>
    </div>
  );
};

export default Media;
