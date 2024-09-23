import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import FindTheRight from "../../components/FindTheRight/FindTheRight";
import Home from "../../pages/Home/Home";
// import Find_the_right from "../../components/Find_the_right";

const UserTemplate = () => {
  // header , content , footer
  return (
    <>
      <Header />
      <Home />
      <FindTheRight />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default UserTemplate;
