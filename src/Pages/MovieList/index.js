import { useLocation } from "react-router-dom";
import MovieItems from "../../Components/AllMovies/AllMovieItems/MovieItems";
import Trending from "../../Components/AllMovies/AllMovieItems/Trending";
import UpComming from "../../Components/AllMovies/AllMovieItems/UpComming";
import Layout from "../../Components/Layouts";

export default function MovieList() {
  const location = useLocation();
  console.log("Current path:", location.pathname); // Debugging log
  return (
    <Layout>
      {/* movies */}
      {location.pathname === "/m" && (
        <MovieItems title="All Movies" serverApiUrl="discover/movie" />
      )}
      {location.pathname === "/m" && (
        <Trending title="Trending Movies" serverApiUrl="trending/movie" />
      )}
      {location.pathname === "/m" && (
        <UpComming title="UpComming Movies" serverApiUrl="movie/upcoming" />
      )}{" "}
      {/* genres */}
      {location.pathname === "/genres" && (
        <MovieItems title="Comedy" serverApiUrl="discover/movie" />
      )}
      {location.pathname === "/genres" && (
        <MovieItems title="War" serverApiUrl="discover/movie" />
      )}
      {location.pathname === "/genres" && (
        <MovieItems title="Drama" serverApiUrl="discover/movie" />
      )}
      {location.pathname === "/genres" && (
        <MovieItems title="Horror" serverApiUrl="discover/movie" />
      )}
      {location.pathname === "/genres" && (
        <MovieItems title="Animation" serverApiUrl="discover/movie" />
      )}
      {location.pathname === "/genres" && (
        <MovieItems title="History" serverApiUrl="discover/movie" />
      )}
      {/* series */}
      {location.pathname === "/s" && (
        <MovieItems title="All TvShows" serverApiUrl="discover/tv" />
      )}
      {location.pathname === "/s" && (
        <Trending title="Trending TvShows" serverApiUrl="trending/tv" />
      )}
      {location.pathname === "/s" && (
        <UpComming title="UpComming TvShows" serverApiUrl="tv/on_the_air" />
      )}{" "}
    </Layout>
  );
}
