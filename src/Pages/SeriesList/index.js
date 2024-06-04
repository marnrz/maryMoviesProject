import MovieItems from "../../Components/AllMovies/AllMovieItems/MovieItems";
import Trending from "../../Components/AllMovies/AllMovieItems/Trending";
import UpComming from "../../Components/AllMovies/AllMovieItems/UpComming";
import Layout from "../../Components/Layouts";

export default function SeriesList() {
  return (
    <Layout>
      <MovieItems title="All TvShows" serverApiUrl="discover/tv" />
      <Trending title="Trending Movies" serverApiUrl="trending/tv" />
      <UpComming title="UpComming Movies" serverApiUrl="tv/on_the_air" />
    </Layout>
  );
}
