import { useLocation, useParams } from "react-router-dom";
import MovieItems from "../../../Components/AllMovies/AllMovieItems/MovieItems";
import Trending from "../../../Components/AllMovies/AllMovieItems/Trending";
import UpComing from "../../../Components/AllMovies/AllMovieItems/UpComing";
import Layout from "../../../Components/Layouts";
import { useEffect } from "react";

const config = {
  "/m": [
    {
      component: MovieItems,
      props: { title: "All Movies", serverApiUrl: "discover/movie" },
    },
    {
      component: Trending,
      props: { title: "Trending Movies", serverApiUrl: "trending/movie" },
    },
    {
      component: UpComing,
      props: { title: "UpComing Movies", serverApiUrl: "movie/upcoming" },
    },
  ],
  "/genres": [
    {
      component: MovieItems,
      props: { title: "Comedy", serverApiUrl: "discover/movie", genreId: 35 },
    },
    {
      component: MovieItems,
      props: { title: "War", serverApiUrl: "discover/movie", genreId: 10752 },
    },
    {
      component: MovieItems,
      props: { title: "Drama", serverApiUrl: "discover/movie", genreId: 18 },
    },
    {
      component: MovieItems,
      props: { title: "Horror", serverApiUrl: "discover/movie", genreId: 27 },
    },
    {
      component: MovieItems,
      props: {
        title: "Animation",
        serverApiUrl: "discover/movie",
        genreId: 16,
      },
    },
    {
      component: MovieItems,
      props: { title: "History", serverApiUrl: "discover/movie", genreId: 36 },
    },
  ],
  // "/s": [
  //   {
  //     component: MovieItems,
  //     props: { title: "All TvShows", serverApiUrl: "discover/tv" },
  //   },
  //   {
  //     component: Trending,
  //     props: { title: "Trending TvShows", serverApiUrl: "trending/tv" },
  //   },
  //   {
  //     component: UpComing,
  //     props: { title: "UpComing TvShows", serverApiUrl: "tv/on_the_air" },
  //   },
  // ],
};

export default function MovieList() {
  useEffect(() => {
    document.title = "Movies";
  }, []);
  const location = useLocation();
  const components = config[location.pathname] || [];

  return (
    <Layout>
      {components.map(({ component: Component, props }, index) => (
        <Component key={index} {...props} />
      ))}
    </Layout>
  );
}
