import { useEffect, useState } from "react";
import ImageBasic from "../../Utils/ImageBase/imageBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRotate } from "@fortawesome/free-solid-svg-icons";
import Style from "./style";
import { Link } from "react-router-dom";
import api from "../../Utils/Api/api";

export default function ShowListOfMovies({ title }) {
  const [moviesDataItem, setMoviesDataItem] = useState([]);
  const [trendingsDataItem, setTrendingsDataItem] = useState([]);
  const [upCommingDataItem, setUpCommingDataItem] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // getMovieApi();
    getTrendingsApi();
    getupCommingApi();
  }, []);

  //   Api
  //   async function getMovieApi(page = 1) {
  //     try {
  //       setLoading(true);
  //       const response = await api.get(serverApiUrl, {
  //         params: {
  //           language: "en-US",
  //           page: page,
  //         },
  //       });
  //       console.log(response);
  //       setMoviesDataItem(response.data.results.slice(0, 6));
  //       setLoading(false);
  //     } catch (e) {
  //       console.log("Error fetching movies:", e);
  //       setLoading(false);
  //     }
  //   }

  async function getupCommingApi(page = 1) {
    try {
      setLoading(true);
      const response = await api.get("movie/upcoming", {
        params: {
          language: "en-US",
          page: page,
        },
      });
      console.log(response);
      setUpCommingDataItem(response.data.results.slice(0, 6));
      setLoading(false);
    } catch (e) {
      console.log("Error fetching movies:", e);
      setLoading(false);
    }
  }

  async function getTrendingsApi(page = 1) {
    try {
      setLoading(true);
      const response = await api.get("trending/movie", {
        params: {
          language: "en-US",
          page: page,
        },
      });
      console.log(response);
      setTrendingsDataItem(response.data.results.slice(0, 6));
      setLoading(false);
    } catch (e) {
      console.log("Error fetching movies:", e);
      setLoading(false);
    }
  }

  //   Render

  function renderUpCommingMovie() {
    if (upCommingDataItem === null || upCommingDataItem === undefined)
      return "";
    return upCommingDataItem.map(
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
                    <FontAwesomeIcon className="icon" icon={faCameraRotate} />
                  </span>
                </div>
              ) : (
                <div className="cover relative">
                  <img
                    src={`${ImageBasic.wUrl}${poster_path}`}
                    alt={title || name}
                  />
                  <div className="coverHover">
                    <div className="right"></div>
                    <div className="left"></div>
                  </div>
                  <h2 className=" name mt-4 mb-1">{title || name}</h2>
                </div>
              )}
            </Link>
          </li>
        );
      }
    );
  }

  function renderTrending() {
    if (trendingsDataItem === null || trendingsDataItem === undefined)
      return "";
    return trendingsDataItem.map(
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
                    <FontAwesomeIcon className="icon" icon={faCameraRotate} />
                  </span>
                </div>
              ) : (
                <div className="cover relative">
                  <img
                    src={`${ImageBasic.wUrl}${poster_path}`}
                    alt={title || name}
                  />
                  <div className="coverHover">
                    <div className="right absolute"></div>
                    <div className="left absolute"></div>
                  </div>
                  <h2 className=" name mt-4 mb-1">{title || name}</h2>
                </div>
              )}
            </Link>
          </li>
        );
      }
    );
  }
  return (
    <Style>
      <div className="showList">
        <div className="wrapperFull">
          <div className="showListWrapper">
            <div className="title">
              <h3>{title}</h3>
            </div>
            <div className="movieList">
              <ul className="list">{renderTrending()}</ul>
              <ul className="list flex  mt-4">{renderUpCommingMovie()}</ul>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
