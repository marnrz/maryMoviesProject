import { useEffect, useState } from "react";
import Style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCameraRetro,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import ImageBasic from "../../../../Utils/ImageBase/imageBase";
import renderRateColor from "../../../../Utils/CollorRating";
import DateChanger from "../../../../Utils/DateChanger/date";
import api from "../../../../Utils/Api/api";

export default function Trending({ title, serverApiUrl }) {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    getApi("day");
  }, []);

  async function getApi(time_window) {
    try {
      setLoading(true);
      const response = await api.get(`${serverApiUrl}/${time_window}`, {
        params: {
          language: "en-US",
        },
      });
      setMoviesData(response.data.results.slice(0, 6));
      setLoading(false);
    } catch (e) {
      console.error("Error fetching data:", e.message);
      setLoading(false);
    }
  }

  function renderTrending() {
    if (!moviesData || moviesData.length === 0)
      return <p>No trending data found.</p>;
    return moviesData.map(
      ({
        id,
        poster_path,
        title,
        release_date,
        name,
        first_air_date,
        vote_average,
      }) => (
        <li className="col-2 relative" key={id}>
          <Link to="/m/trending">
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
      )
    );
  }

  return (
    <Style>
      <div className="trending relative z-2 mt-6">
        <div className="wrapperFull">
          {loading ? (
            <p>Please wait...</p>
          ) : (
            <div className="trendingWrapper">
              {location.pathname !== "/search" && (
                <div className="trendingBtn flex align-item justifyBetween">
                  <div className="titleBox flex gap-3 alignCenter">
                    <h2 className="title">{title}</h2>
                    <Link to="/m/trending" className="viewMore flex gap-1">
                      <span className="textViewMore">View More</span>
                      <span className="icon">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </span>
                    </Link>
                  </div>
                  <div className="selector">
                    <div className="anchor">
                      <h3>
                        <Link to="#" onClick={() => getApi("day")}>
                          Today
                        </Link>
                      </h3>
                    </div>
                    <div className="anchor">
                      <h3>
                        <Link to="#" onClick={() => getApi("week")}>
                          This Week
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              )}
              <ul className="list flex mt-4">{renderTrending()}</ul>
            </div>
          )}
        </div>
      </div>
    </Style>
  );
}
