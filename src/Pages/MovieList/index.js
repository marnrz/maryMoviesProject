import MovieItems from "../../Components/AllMovies/MovieItems";
import Trending from "../../Components/AllMovies/Trending";
import UpComming from "../../Components/AllMovies/UpComming";
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
