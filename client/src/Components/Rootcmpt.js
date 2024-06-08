import React from 'react'
import NavigationBar from "./Navbar";
import Footer from "./Footer";
import Home from './Home';
import { Outlet } from "react-router-dom";

export default function Rootcmpt() {
  return (
    <div className='bg-secondary pt-1 pb-2'>
       <NavigationBar />
      {/* placeholder component */}
      <div style={{ minHeight: "71vh" }}>
       
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
