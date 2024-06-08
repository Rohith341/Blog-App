import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function Author() {
  return (
    
    <div>
      
      <div className=' mx-nav justify-content-center mt-1'>
      <ul className="nav justify-content-center bg-warning m-4 d-flex align-items-center">
      {/* link to Home  */}
      <li className="nav-item ms-5">
        <NavLink className="nav-link" to="WriteArticle">
        WriteArticle
        </NavLink>
      </li>
       {/* link to Register  */}
       <li className="nav-item ms-5">
        <NavLink className="nav-link" to="ArticlesList">
        ArticlesList
        </NavLink>
      </li>
       {/* link to Login  */}
     
     
    </ul>
    </div>
    <Outlet/>
    </div>
    
  )
}
