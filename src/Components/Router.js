import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/homePage";

import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
  ]);
  return <RouterProvider router={router} />;
}
