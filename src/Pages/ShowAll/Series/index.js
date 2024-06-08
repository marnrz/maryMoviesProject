import { useLocation } from "react-router-dom";
import AllSeriesList from "../../../Components/AllMovies/SeriesList";

export default function ShowAllSeries({ time_window, name }) {
  const location = useLocation();
  console.log("Current path:", location.pathname); // Debugging log
  return (
    <>
      {location.pathname === "/all-series" && (
        <AllSeriesList title="All Series" serverApiUrl="discover/tv" />
      )}
      {location.pathname === "/s/upcoming" && (
        <AllSeriesList title="Upcoming Series" serverApiUrl="tv/on_the_air" />
      )}
      {location.pathname === "/s/trending" && (
        <AllSeriesList
          title="Trending Series"
          time="day"
          serverApiUrl={`trending/tv/${time_window}`}
        />
      )}
      {location.pathname === "/s/top-rated" && (
        <AllSeriesList title="Top Rated Series" serverApiUrl="tv/top_rated" />
      )}
      {location.pathname === `/genres/${name}` && (
        <AllSeriesList title={name} serverApiUrl="discover/tv" />
      )}
    </>
  );
}
