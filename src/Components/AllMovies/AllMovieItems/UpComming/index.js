import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Style from "./style";
import ImageBasic from "../../../../Utils/ImageBase/imageBase";
import DateChanger from "../../../../Utils/DateChanger/date";
import api from "../../../../Utils/Api/api";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import renderMovieGenres from "../../../../Utils/Genres/genres";

export default function UpComming({ title, serverApiUrl }) {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getUpCommingApi();
  }, []);

  async function getUpCommingApi() {
    try {
      setLoading(true);
      const response = await api.get(serverApiUrl, {
        params: {
          language: "en - US",
          page: "2",
        },
      });
      setMoviesData(response.data.results.slice(0, 4));
      console.log(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  function renderUpCommingMovie() {
    if (moviesData === null || moviesData === undefined) return "";
    return moviesData.map(
      ({
        id,
        poster_path,
        title,
        release_date,
        name,
        first_air_date,
        genre_ids,
      }) => {
        return (
          <li className="col-2 relative" key={id}>
            <Link to={`/m/${id}`}>
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
                <h3 className="mt-4 mb-1">{title || name}</h3>
                <p className="mb-1">
                  <DateChanger dateString={release_date || first_air_date} />
                </p>
                <p className="flex">
                  {renderMovieGenres(genre_ids).map((genre, index) => (
                    <span
                      key={index}
                      className="flex justifyBetween alignCenter"
                    >
                      {genre} {index < genre_ids.length - 1 && ", "}
                    </span>
                  ))}
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
      <div className="upComming relative z-2 mt-6">
        <div className="wrapperFull">
          {loading ? (
            <div className="spinner"></div>
          ) : (
            <div className="upCommingWrapper ">
              <div className="titleBox flex gap-3 alignCenter">
                <h2 className="title ">{title}</h2>
                <Link to="/m/upcomming" className="viewMore flex alignCenter">
                  <span className="textViewMore">View More</span>
                  <span className="icon">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </Link>
              </div>
              <ul className="list flex mt-4">{renderUpCommingMovie()}</ul>
            </div>
          )}
        </div>
      </div>
    </Style>
  );
}
