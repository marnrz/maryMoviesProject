import { useEffect, useState } from "react";
import Style from "./style";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCameraRetro,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import api from "../../../Utils/Api/api";
import DateChanger from "../../../Utils/DateChanger/date";
import ImageBasic from "../../../Utils/ImageBase/imageBase";
import renderRateColor from "../../../Utils/CollorRating";

export default function Trending({ title, type, dateString, serverApiUrl }) {
  const [moviesData, setMoviesData] = useState([]);
  // const [currntPage, setCurentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    getApi("day");
  }, []);

  async function getApi(time_window) {
    try {
      setLoading(true);
      const response = await api.get(serverApiUrl / `${time_window}`, {
        params: {
          language: "en - US",
          // page: currntPage,
        },
      });
      setMoviesData(response.data.results.slice(0, 6));
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  function renderTrending() {
    if (moviesData === null || moviesData === undefined) return "";
    return moviesData.map(
      ({
        id,
        poster_path,
        title,
        release_date,
        name,
        first_air_date,
        vote_average,
      }) => {
        return (
          <li className="col-2 relative" key={id}>
            <Link to="#">
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
                    {vote_average.toFixed(1)}
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
  // function onChange(page) {
  //   setCurentPage(page);
  // }
  return (
    <Style>
      <div className="trending relative z-2 mt-6">
        <div className="wrapperFull">
          {loading ? (
            <p>please wait...</p>
          ) : (
            <div className="trendingWrapper">
              <div className="trendingBtn flex align-item justifyBetween">
                <div className="titleBox flex gap-3 alignCenter">
                  <h2 className="title ">{title}</h2>
                  <Link to="#" className="viewMore flex gap-1">
                    <span className="textViewMore">View More</span>
                    <span className="icon">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </Link>
                </div>
                {location.pathname !== "/Search" && ( // Check if the current path is not "/search"
                  <div className="selector">
                    <div className="anchor">
                      <h3>
                        <Link to="#">Today</Link>
                      </h3>
                    </div>
                    <div className="anchor">
                      <h3>
                        <Link to="#">This Week</Link>
                      </h3>
                    </div>

                    {/* <Button
                      className="btn"
                      defaultActiveBg="${colorPallet.primaryColor}"
                      type="primary"
                      size="middle"
                      onClick={() => getApi("day")}
                    >
                      Day
                    </Button>
                    <Button
                      className="btn"
                      primaryColor="${colorPallet.primaryColor}"
                      type="default"
                      size="middle"
                      onClick={() => getApi("week")}
                    >
                      Week
                    </Button> */}
                  </div>
                )}
              </div>
              {/* {location.pathname !== "/search" && ( // Check if the current path is not "/search"
                <h3>{type}</h3>
              )} */}
              {loading ? (
                <p>Please wait...</p>
              ) : (
                <ul className="list flex mt-4">{renderTrending()}</ul>
              )}
            </div>
          )}
        </div>
      </div>
    </Style>
  );
}
