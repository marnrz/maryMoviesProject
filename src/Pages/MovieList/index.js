import MovieItems from "../../Components/AllMovies/AllMovieItems/MovieItems";
import Trending from "../../Components/AllMovies/AllMovieItems/Trending";
import UpComming from "../../Components/AllMovies/AllMovieItems/UpComming";
import Layout from "../../Components/Layouts";

export default function MovieList() {
  return (
    <Layout>
      <MovieItems title="All MovieShows" serverApiUrl="discover/movie" />
      <Trending title="Trending Movies" serverApiUrl="trending/movie" />
      <UpComming title="UpComming Movies" serverApiUrl="movie/upcoming" />
    </Layout>
  );
}
