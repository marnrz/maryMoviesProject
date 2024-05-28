import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/homePage";

import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Error404 from "../Pages/Error404";
import MovieList from "../Pages/MovieList";
import SeriesList from "../Pages/SeriesList";
import ShowListOfMovies from "../Pages/ShowListOfMovies";

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
    {
      path: "/m",
      element: <MovieList />,
    },
    {
      path: "/s",
      element: <SeriesList />,
    },
    {
      path: "/movies",
      element: <ShowListOfMovies />,
    },
    {
      path: "/upcomming",
      element: <ShowListOfMovies />,
    },
    {
      path: "/m/trending",
      element: <ShowListOfMovies />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);
  return <RouterProvider router={router} />;
}
