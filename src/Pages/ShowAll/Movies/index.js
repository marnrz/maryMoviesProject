import { useLocation } from "react-router-dom";
import AllMovieList from "../../../Components/AllMovies/MovieLIst";

export default function ShowAllMovies({ time_window, name }) {
  const location = useLocation();
  console.log("Current path:", location.pathname); // Debugging log
  return (
    <>
      {location.pathname === "/all-movies" && (
        <AllMovieList title="All Movies" serverApiUrl="discover/movie" />
      )}
      {location.pathname === "/m/upcoming" && (
        <AllMovieList title="UpComing Movies" serverApiUrl="movie/upcoming" />
      )}
      {location.pathname === "/m/trending" && (
        <AllMovieList
          title="Trending Movies"
          time="day"
          serverApiUrl={`trending/movie/${time_window}`}
        />
      )}
      {location.pathname === "/m/top-rated" && (
        <AllMovieList title="TopRated Movies" serverApiUrl="movie/top_rated" />
      )}
      {location.pathname === `/genres/${name}` && (
        <AllMovieList title={name} serverApiUrl="discover/movie" />
      )}
    </>
  );
}
