import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/homePage";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Error404 from "../Pages/Error404";
import MovieList from "../Pages/MovieList";
import SeriesList from "../Pages/SeriesList"; // New import
import SingleMovie from "../Pages/SingleMovie";
import ShowAllMovies from "../Pages/ShowAll/Movies";
import ShowAllSeries from "../Pages/ShowAll/Series"; // New import
import Search from "./SearchPage";
import SignUp from "../Pages/SignUp";

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
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/m",
      element: <MovieList />,
    },
    {
      path: "/s",
      element: <SeriesList />, // New route
    },
    {
      path: "/genres",
      element: <MovieList />,
    },
    {
      path: "/all-movies",
      element: <ShowAllMovies />,
    },
    {
      path: "/all-series",
      element: <ShowAllSeries />, // New route
    },
    {
      path: "/m/upcoming",
      element: <ShowAllMovies />,
    },
    {
      path: "/s/upcoming",
      element: <ShowAllSeries />, // New route
    },
    {
      path: "/m/top-rated",
      element: <ShowAllMovies />,
    },
    {
      path: "/s/top-rated",
      element: <ShowAllSeries />, // New route
    },
    {
      path: "/m/trending",
      element: <ShowAllMovies time_window="day" />,
    },
    {
      path: "/s/trending",
      element: <ShowAllSeries time_window="day" />, // New route
    },
    {
      path: "/m/:id",
      element: <SingleMovie />,
    },

    {
      path: "/genres/:name",
      element: <ShowAllMovies />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return <RouterProvider router={router} />;
}
