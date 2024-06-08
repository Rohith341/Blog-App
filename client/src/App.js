import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { Switch } from 'react-router-dom';

import './App.css';
import Rootcmpt from './Components/Rootcmpt';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Home from './Components/Home';
import User from './Components/User';
import Admin from './Components/Admin';
import Author from './Components/Author';
import ErrorRoute from './Components/ErrorRoute';
import UserComments from './Components/UserComments';
import WriteArticle from './Components/WriteArticle';
import UsersList from './Components/UsersList';
import AuthorsList from './Components/AuthorsList';
import ArticlesList from './Components/Articleslist';
import ArticleByID from './Components/ArticleByID';
import Article from './Components/article/Article';

import {lazy, Suspense} from 'react'

function App() {
 
   
  let router= createBrowserRouter([
    {
     path:'',
     element:<Rootcmpt/>,
     errorElement:<ErrorRoute/>,
     children:[

      {
        path:'Home',
        element:<Home/>
      },
      {
        path:'Signup',
        element:<Signup/>
      },
      {
        path:"Signin",
        element:<Signin/>

      },
         {
            path:"User",
            element:  <User/> ,
          
          
            children:[
              {
                 path:'UserComments',
                 element:<UserComments/>
              },
              {
                path:'ArticlesList',
                element:<ArticlesList/>
              },
              {
                path:"article/:articleId",
                element:<Article />
              },
              {
                path:'',
                element:<Navigate to='ArticlesList' />
              }

            ]
          
        
      },
      {
        path:"Author",
        element:<Author/>,
        children:[
          {
          path:'WriteArticle',
          element:<WriteArticle/>
          },
          {
            path:'ArticlesList',
            element:<ArticlesList/>
          },
          {
            path:'article/:articleid',
            element:<Article/>
          },
          {
            path:'',
            element:<Navigate to='ArticlesList' />
          }
        ]

      },

          
          {
            path:"Admin",
            element:<Admin/>,
            children:[
              {
              path:'UsersList',
              element:<UsersList/>
              },
              {
                path:'AuthorsList',
                element:<AuthorsList/>
              },
              {
                path:'ArticleByID',
                element:<ArticleByID/>
              },
              {
                path:'ArticlesList',
                element:<ArticlesList/>
              }
            ]

          }
        ]
      }
     ] )
     
   return(
      <div className='text-center h-100 w-100'>
        
       {/* provide browserRouter ob to application */}
       <RouterProvider router={router}/>
          </div>
    )

   

 /* return (
    <div className="App">
      <header className="App-header">
       <h1> Rohith Saindla</h1>
      </header>
    </div>
  )*/
}


export default App;

