import React from "react";
import SideBar from "../components/SideBar";

const MainContainer = ({ children }) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};

export default MainContainer;
