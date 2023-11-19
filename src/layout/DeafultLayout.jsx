import React from "react";
import Header from "../components/ui/Header";
import { Outlet } from "react-router-dom";

const DeafultLayout = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* footer */}
    </div>
  );
};

export default DeafultLayout;
