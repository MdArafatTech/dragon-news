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
import Sports1 from "../pages/Sports1";
import Sports2 from "../pages/Sports2";
import Sports3 from "../pages/Sports3";
import NationalNews from "../pages/NationalNews";
import BreakingNewes from "../pages/BreakingNewes";
import RegularNews from "../pages/RegularNews";
import Internationalnews from "../pages/Internationalnews";
import Sports from "../pages/Sports";
import Entertainment from "../pages/Entertainment";
import Culture from "../pages/Culture";
import Arts from "../pages/Arts";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";




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
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
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
        path:"/sports1",
        element:<Sports1></Sports1>
      },
      
      {
        path:"/sports2",
        element:<Sports2></Sports2>
      },
      {
        path:"/sports3",
        element:<Sports3></Sports3>
      },
      {
         path:"/nationalnews",
         element:<NationalNews></NationalNews>
      },
      {
         path:"/breakingnews",
         element:<BreakingNewes></BreakingNewes>
      },
      {
         path:"/Regularnews",
         element:<RegularNews></RegularNews>
      },
      {
         path:"/internationalnews",
         element:<Internationalnews></Internationalnews>
      },
      {
         path:"/sports",
         element:<Sports></Sports>
      },
      {
         path:"/entertainment",
         element:<Entertainment></Entertainment>
      },
      {
         path:"/culture",
         element:<Culture></Culture>
      },
      {
         path:"/arts",
         element:<Arts></Arts>
      },

      {
        path:"/profile",
        element:<Profile></Profile>
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