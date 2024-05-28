import MovieItems from "../../Components/AllMovies/MovieItems";
import UpComming from "../../Components/AllMovies/UpComming";
import Layout from "../../Components/Layouts";

export default function SeriesList() {
  return (
    <Layout>
      <MovieItems title="All TvShows" serverApiUrl="discover/tv" />
      <UpComming title="UpComming Movies" serverApiUrl="tv/on_the_air" />
    </Layout>
  );
}
