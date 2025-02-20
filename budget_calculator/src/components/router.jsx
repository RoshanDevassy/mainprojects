import {
  createBrowserRouter,
} from "react-router-dom";
import Header from "./header";
import Home from "../pages/home";
import About from "../pages/about";
import App from "../pages/app";



const router = createBrowserRouter([
  {
    element : <Header/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path:'/home',
        element:<Home/>,
      },
      {
        path: 'about',
        element:<About/>,
      },
      {
        path: 'app',
        element: <App/>,
      },
    ],
  },
]);

export { router };
