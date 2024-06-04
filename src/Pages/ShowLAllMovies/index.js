import { useLocation } from "react-router-dom";
import AllMovieList from "../../Components/AllMovies/MovieLIst";

export default function ShowAllMovies(time_window) {
  const location = useLocation();
  return (
    <>
      {location.pathname == "/all-movies" && (
        <AllMovieList serverApiUrl="discover/movie" />
      )}
      {location.pathname == "/m/upcomming" && (
        <AllMovieList serverApiUrl="movie/upcoming" />
      )}
      {location.pathname == "/m/trending" && (
        <AllMovieList
          time="day"
          serverApiUrl={`trending/movie/${time_window}`}
        />
      )}
    </>
  );
}
