import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/homePage";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Error404 from "../Pages/Error404";
import MovieList from "../Pages/MovieList";
import SeriesList from "../Pages/SeriesList";
import SearchPage from "../Pages/Search";
import SingleMovie from "../Pages/SingleMovie";
import ShowAllMovies from "../Pages/ShowAll/Movies";

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
      element: <ShowAllMovies />,
    },
    {
      path: "/m/upcomming",
      element: <ShowAllMovies />,
    },
    {
      path: "/m/trending",
      element: <ShowAllMovies time_window="day" />,
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
