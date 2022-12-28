import React from "react";
import Banner from "../Banner/Banner";
import CreatePost from "../CreatePost/CreatePost";
import MediaCategory from "../MediaCategory/MediaCategory";
import WorldMedia from "../WorldMedia/WorldMedia";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <CreatePost></CreatePost>
      <MediaCategory></MediaCategory>
      <WorldMedia></WorldMedia>
      {/* <SecondSection></SecondSection> */}
    </div>
  );
};

export default Home;
