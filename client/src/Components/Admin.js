import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function Admin() {
  return (
    <div className=' mx-auto '>
    <ul className="nav justify-content-center bg-warning m-4 d-flex align-items-center">
    {/* link to Home  */}
    <li className="nav-item ms-5">
      <NavLink className="nav-link" to="UsersList">
      UsersList
      </NavLink>
    </li>

    <li className="nav-item ms-5">
      <NavLink className="nav-link" to="Authorslist">
      Authorslist
      </NavLink>
    </li>

 
     {/* link to Register  */}
     <li className="nav-item ms-5">
      <NavLink className="nav-link" to="ArticlesList">
      ArticlesList
      </NavLink>
    </li>
     {/* link to Login  */}
     <li className="nav-item ms-5">
      <NavLink className="nav-link" to="ArticleByID">
      ArticleByID
      </NavLink>
    </li>
    
  </ul>
  <Outlet/>
  </div>
  )
}
