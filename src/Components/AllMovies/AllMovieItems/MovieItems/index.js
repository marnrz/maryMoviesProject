import { useEffect, useState } from "react";
import Style from "./style";
import { Link, useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCameraRetro,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import ImageBasic from "../../../../Utils/ImageBase/imageBase";
import renderRateColor from "../../../../Utils/CollorRating";
import DateChanger from "../../../../Utils/DateChanger/date";
import api from "../../../../Utils/Api/api";

export default function MovieItems({ title, serverApiUrl, genreId }) {
  const { id } = useParams();
  const location = useLocation();
  const [moviesDataItem, setMoviesDataItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovieApi();
  }, [id, serverApiUrl, genreId]);

  async function getMovieApi(page = 1) {
    try {
      setLoading(true);
      const response = await api.get(serverApiUrl, {
        params: {
          language: "en-US",
          page: page,
          with_genres: genreId || id, // Use genreId if provided, otherwise use id
        },
      });
      console.log(response);
      setMoviesDataItem(response.data.results.slice(0, 6));
      setLoading(false);
    } catch (e) {
      console.log("Error fetching movies:", e);
      setLoading(false);
    }
  }

  function renderMovieItems() {
    if (!moviesDataItem) return null;
    return moviesDataItem.map(
      ({
        id,
        poster_path,
        title,
        name,
        release_date,
        vote_average,
        first_air_date,
      }) => {
        // Determine the base path for the links
        const basePath = location.pathname.startsWith("/genres")
          ? "/m"
          : location.pathname;

        return (
          <li className="col-2 relative mb-4" key={id}>
            <Link to={`${basePath}/${id}`}>
              {poster_path == null ? (
                <div className="noPic relative">
                  <span className="iconPlace absolute">
                    <FontAwesomeIcon className="icon" icon={faCameraRetro} />
                  </span>
                </div>
              ) : (
                <div className="poster relative">
                  <img
                    src={`${ImageBasic.wUrl}${poster_path}`}
                    alt={title || name}
                  />
                  <span className="icon absolute">
                    <FontAwesomeIcon className="playIcon" icon={faCirclePlay} />
                  </span>
                </div>
              )}
              <div className="infoTitle">
                <h3 className="mt-3 mb-2">{title || name}</h3>
                <p>
                  <DateChanger dateString={release_date || first_air_date} />
                </p>
              </div>
            </Link>
          </li>
        );
      }
    );
  }

  return (
    <Style>
      <div className="movieItem relative z-2 mt-6">
        <div className="wrapper">
          {loading ? (
            <div className="spinner"></div>
          ) : (
            <div className="movieItemWrapper">
              <div className="titleBox flex gap-3 alignCenter">
                <h2 className="title">{title}</h2>
                <Link to="/all-movies" className="viewMore flex gap-1">
                  <span className="textViewMore">View More</span>
                  <span className="icon">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </Link>
              </div>
              <ul className="list flex wrap mt-4">{renderMovieItems()}</ul>
            </div>
          )}
        </div>
      </div>
    </Style>
  );
}
