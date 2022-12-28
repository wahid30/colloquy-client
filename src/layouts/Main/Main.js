import React from "react";
import { Outlet } from "react-router-dom";
import Achivements from "../../pages/Home/Achivements/Achivements";
import Communicaitons from "../../pages/Home/Communicaitons/Communicaitons";
import Footer from "../../pages/Shared/Footer/Footer";
import Navbar from "../../pages/Shared/Navber/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Communicaitons></Communicaitons>
      <Achivements></Achivements>
      <Footer></Footer>
    </div>
  );
};

export default Main;
