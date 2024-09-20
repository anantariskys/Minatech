import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PageLayout from "../components/layouts/PageLayout";

const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout><LandingPage/></PageLayout>,
    
  },
 
]);

const Route = () => {
  return (
   
      <RouterProvider router={createRouter} />
   
  );
};

export default Route;