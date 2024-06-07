import { useEffect, useState } from "react";
import Style from "./style";
import { Link } from "react-router-dom";
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

export default function MovieItems({ title, serverApiUrl }) {
  const [moviesDataItem, setMoviesDataItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovieApi();
  }, []);
  async function getMovieApi(page = 2) {
    try {
      setLoading(true);
      const response = await api.get(serverApiUrl, {
        params: {
          language: "en-US",
          page: page,
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
    if (moviesDataItem === null || moviesDataItem === undefined) return "";
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
        return (
          <li className=" col-2 relative" key={id}>
            <Link to={`/m/${id}`}>
              {poster_path == null ? (
                <div className="noPic relative">
                  <span className="iconPlace absolute">
                    <FontAwesomeIcon className="icon" icon={faCameraRetro} />
                  </span>
                </div>
              ) : (
                <div className="poster relative">
                  <img src={`${ImageBasic.wUrl}${poster_path}`} alt={title} />
                  <strong
                    className={`voteColor ${renderRateColor(
                      vote_average
                    )} absolute`}
                  >
                    {vote_average.toFixed(1) * 10}%
                  </strong>
                  <span className="icon absolute">
                    <FontAwesomeIcon className="playIcon" icon={faCirclePlay} />
                  </span>
                </div>
              )}
              <h2 className="mt-4 mb-1">{title || name}</h2>
              <p>
                <DateChanger dateString={release_date || first_air_date} />
              </p>
            </Link>
          </li>
        );
      }
    );
  }

  return (
    <Style>
      <div className="movieItem relative z-2 mt-6">
        <div className="wrapperFull">
          {loading ? (
            <div className="spinner"></div>
          ) : (
            <div className="movieItemWrapper ">
              <div className="titleBox flex gap-3 alignCenter">
                <h2 className="title ">{title}</h2>
                <Link to="/all-movies" className="viewMore flex gap-1">
                  <span className="textViewMore">View More</span>
                  <span className="icon">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </Link>
              </div>

              <ul className="list flex  mt-4">{renderMovieItems()}</ul>

              {/* {App()} */}
            </div>
          )}
        </div>
      </div>
    </Style>
  );
}
