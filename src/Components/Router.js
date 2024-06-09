import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/homePage";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Error404 from "../Pages/Error404";
import MovieList from "../Pages/List/Movie";
import SeriesList from "../Pages/List/Series";
import ShowAllMovies from "../Pages/ShowAll/Movies";
import ShowAllSeries from "../Pages/ShowAll/Series"; // New import
import Search from "./SearchPage";
import SignUp from "../Pages/SignUp";
import SingleSeries from "../Pages/Single/SingleSeries";
import SingleMovie from "../Pages/Single/SingleMovie";

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
      path: "/s/:id",
      element: <SingleSeries />,
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
