import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/homePage";

import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Error404 from "../Pages/Error404";
import MovieList from "../Pages/MovieList";
import SeriesList from "../Pages/SeriesList";
import ShowListOfMovies from "../Pages/ShowListOfMovies";
import SearchPage from "../Pages/Search";
import SingleMovie from "../Pages/SingleMovie";

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
      path: "/all-movies",
      element: <ShowListOfMovies />,
    },
    {
      path: "/m/upcomming",
      element: <ShowListOfMovies />,
    },
    {
      path: "/m/trending",
      element: <ShowListOfMovies />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/m/:id",
      element: <SingleMovie />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);
  return <RouterProvider router={router} />;
}
