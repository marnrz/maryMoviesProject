import MovieItems from "../../Components/AllMovies/MovieItems";
import Trending from "../../Components/AllMovies/Trending";
import UpComming from "../../Components/AllMovies/UpComming";
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
