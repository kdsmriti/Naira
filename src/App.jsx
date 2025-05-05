import { createBrowserRouter ,RouterProvider } from "react-router-dom"
import './App.css'
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import StudyAbroad from "./Pages/StudyAbroad";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Layout from "./Components/Layout";

function App() {
  const router=createBrowserRouter([
    {
      path :"/",
      element:<Layout/>,
      children: [
          { path: "/", element: <Home /> },
          { path: "/studyabroad", element: <StudyAbroad /> },
          { path: "/services", element: <Services /> },
          { path: "/contactus", element: <ContactUs /> },
          { path: "/aboutus", element: <AboutUs /> }
        ]
      }
    ]);
         
  return (
   <div>
    <RouterProvider router={router}></RouterProvider>
   </div>
  )
}

export default App
