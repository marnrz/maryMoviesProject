import { useEffect, useState, useCallback } from "react";
import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import TopBar from "../Layouts/Header/TopBar";
import Background from "../Layouts/Header/Background";
import { Button, Input, Spin, Tag, Pagination } from "antd";
import api from "../../Utils/Api/api";
import { Year } from "../../Utils/DateChanger/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import ImageBasic from "../../Utils/ImageBase/imageBase";
import renderRateColor from "../../Utils/CollorRating";
import Style from "./style";
import Trending from "../AllMovies/AllMovieItems/Trending";

export default function SearchPage() {
  const [allMoviesData, setAllMoviesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(18);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const queryParam = searchParams.get("query");

  useEffect(() => {
    if (queryParam) {
      setSearchQuery(queryParam);
      fetchAllMovies(queryParam);
    }
  }, [queryParam]);

  const fetchAllMovies = async (query) => {
    setLoading(true);
    try {
      let allResults = [];
      let page = 1;
      let totalPages = 1;

      while (page <= totalPages) {
        const response = await api.get("/search/multi", {
          params: { query, page },
        });
        allResults = allResults.concat(response.data.results);
        totalPages = response.data.total_pages;
        page++;
      }

      setAllMoviesData(allResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    setSearchParams(createSearchParams({ query: value }));
    fetchAllMovies(value);
  };

  const handleButtonClick = () => {
    fetchAllMovies(searchQuery);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderSearchResults = () => {
    if (!loading && allMoviesData.length === 0 && searchQuery) {
      return (
        <div className="noResult">
          <h2 className="textNoResult">
            No results found for <b>{searchQuery}</b>!
          </h2>
        </div>
      );
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = allMoviesData.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return paginatedData.map((result) => {
      const {
        id,
        media_type,
        poster_path,
        title,
        name,
        release_date,
        first_air_date,
        vote_average,
      } = result;
      const displayTitle = title || name;
      const displayDate = release_date || first_air_date;

      return (
        <li className="col-2 relative mb-6" key={id}>
          <Link to={`/${media_type === "movie" ? "m" : "s"}/${id}`}>
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
                  alt={displayTitle}
                />
                {vote_average !== undefined && (
                  <strong
                    className={`voteColor ${renderRateColor(
                      vote_average
                    )} absolute`}
                  >
                    {vote_average.toFixed(1)}
                  </strong>
                )}
                <span className="icon absolute">
                  <FontAwesomeIcon className="playIcon" icon={faCirclePlay} />
                </span>
              </div>
            )}
            <div className="multiTitle textCenter">
              {" "}
              <h4 className="title mt-4 mb-2">
                {displayTitle}
                <Year dateString={displayDate} />
              </h4>
              <Tag
                className="ml-2 mb-1"
                color={media_type === "movie" ? "blue" : "green"}
              >
                {media_type === "movie" ? "Movie" : "Series"}
              </Tag>
            </div>
          </Link>
        </li>
      );
    });
  };

  return (
    <Style>
      <Background />
      <TopBar />
      <div className="hero">
        <div className="wrapper">
          <div className="heroWrapper relative z-2 mt-6">
            <div className="searchBox flex column alignCenter justifyCenter mb-6">
              <h1 className="title mb-5 textCenter">
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h1>
              <div className="Box relative">
                <Input
                  className="input"
                  placeholder="Search for a movie, tv show, person..."
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                <Button
                  className="absolute button"
                  type="primary"
                  onClick={handleButtonClick}
                >
                  Show All
                </Button>
              </div>
            </div>
            <div className="searchContent">
              {loading ? (
                <div className="loadingIndicator">
                  <Spin size="large" />
                </div>
              ) : (
                <div className="result">
                  {searchParams.get("query") &&
                    searchParams.get("query") !== "" && (
                      <h1 className="textResult textCenter mb-5">
                        Results for {searchParams.get("query")}
                      </h1>
                    )}
                  <ul className="resultList flex wrap">
                    {renderSearchResults()}
                  </ul>
                  <Pagination
                    current={currentPage}
                    pageSize={itemsPerPage}
                    total={allMoviesData.length}
                    showSizeChanger={false}
                    onChange={handlePageChange}
                    className="pagination textCenter mt-6"
                  />
                </div>
              )}
            </div>
            {!searchQuery && allMoviesData.length === 0 && !loading && (
              <Trending serverApiUrl="trending/all" />
            )}
          </div>
        </div>
      </div>
    </Style>
  );
}
