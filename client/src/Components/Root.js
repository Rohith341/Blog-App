import React from "react";
import NavigationBar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <NavigationBar />
      {/* placeholder component */}
      <div style={{ minHeight: "85vh" }}>
        <h1>Welcome..</h1>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;