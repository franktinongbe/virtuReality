import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar />

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Contenu principal */}
        <main className="flex-grow-1 p-4 bg-light">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;
