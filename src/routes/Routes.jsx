import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";



//Pages 
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/HomePage";
import SingleNewsPage from "../pages/SingleNewsPage";

import Register from "../components/Register";
import Login from "../components/Login";
import Account from "../pages/AccountPage";
import Author1 from "../pages/AuthorPage1";
import AuthorPage2 from "../pages/AuthorPage2";
import Newspage1 from "../pages/Newspage1";
import NewsPage2 from "../pages/NewsPage2";
import NewsPage3 from "../pages/NewsPage3";



const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path:"career",
        element: <div>This is career</div>
      },
      {
        path: "about",
        element: <div>This is about</div>
      },


     

      {
        path: "/authorpage1",
        element: <Author1></Author1> // Make sure this component exists
      },
      {
        path: "/authorpage2",
        element:<AuthorPage2></AuthorPage2> // Make sure this component exists
      },

      {
        path:"/newspage1",
        element:<Newspage1></Newspage1>
      },
      {
        path:"/newspage2",
        element:<NewsPage2></NewsPage2>
      },
      {
        path:"/newspage3",
        element:<NewsPage3></NewsPage3>
      },



      {
        path: "/:title",
        element: <SingleNewsPage></SingleNewsPage>
      },
      {
        path: "account",
        element: <Account></Account>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "login",
        element: <Login></Login>
      }
     
    ],
  },
]);

export default Routes;