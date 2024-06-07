import { useEffect, useState } from "react";
import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import TopBar from "../../Components/Layouts/Header/TopBar";
import Background from "../../Components/Layouts/Header/Background";
import { Button, Input } from "antd";
import api from "../../Utils/Api/api";
import DateChanger from "../../Utils/DateChanger/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import ImageBasic from "../../Utils/ImageBase/imageBase";
import renderRateColor from "../../Utils/CollorRating";
import Style from "./style";
import Trending from "../../Components/AllMovies/AllMovieItems/Trending";

export default function SearchPage() {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const queryParam = searchParams.get("query");

  useEffect(() => {
    if (queryParam !== null && queryParam !== "") {
      request(queryParam);
    }
  }, []);

  const request = async (value) => {
    setLoading(true);
    try {
      const response = await api.get("/search/movie", {
        params: {
          query: value,
        },
      });
      setSearchParams(
        createSearchParams({
          query: value,
        })
      );
      setMoviesData(response.data.results.slice(0, 12));
      setLoading(false);
    } catch (e) {
      console.log("Error fetching movies:", e);
      setLoading(false);
    }
  };

  const onType = (event) => {
    const value = event.target.value;
    setSearchParams({ query: value });
    if (value !== "") {
      request(value);
    }
  };

  function renderSearch() {
    if (moviesData.length === 0) {
      if (searchQuery !== "") {
        return (
          <div className="noResult ">
            <h2 className="textNoResult ">
              No results found for <b>{`${searchQuery}`}</b>!
            </h2>
          </div>
        );
      } else {
        return null;
      }
    }
    return moviesData.map(
      ({ id, poster_path, title, release_date, vote_average }) => {
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
                  <img src={`${ImageBasic.wUrl}${poster_path}`} alt={title} />
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
              <h2 className=" title mt-4 mb-1">{title}</h2>
              <p className="date">
                <DateChanger dateString={release_date} />
              </p>
            </Link>
          </li>
        );
      }
    );
  }

  return (
    <Style>
      <Background />
      <TopBar />
      <div className="hero">
        <div className="wrapperFull">
          <div className="heroWrapper relative z-2 mt-6">
            <div className="searchBox flex column alignCenter justifyCenter mb-6">
              <h1 className="title mb-5 textCenter">
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h1>
              <div className="Box relative mb-5">
                <Input
                  className="input"
                  placeholder="Search for a movie, tv show, person..."
                  onChange={onType}
                  defaultValue={queryParam || ""}
                />
                <Button
                  className="absolute button"
                  type="primary"
                  onClick={() => request(queryParam)}
                >
                  Show All
                </Button>
              </div>
            </div>
            <div className="searchContent">
              <div className="result">
                {queryParam && queryParam !== "" && (
                  <h1 className="textResult textCenter mb-5">
                    Results for {queryParam}
                  </h1>
                )}
                <ul className="resultList flex wrap gap-1">{renderSearch()}</ul>
              </div>
            </div>
            <Trending serverApiUrl="trending/all" />
          </div>
        </div>
      </div>
    </Style>
  );
}
