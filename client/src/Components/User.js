import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'



export default function User() {
  return (
    <div className=' mx-nav justify-content-center mt-1 '>
      <>
     <NavLink to='Articleslist' className='fs-4 text-primary nav-link mt-4'>Articles</NavLink>
    </>
    <Outlet></Outlet>
    </div>
  )
}
