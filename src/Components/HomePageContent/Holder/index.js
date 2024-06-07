import { useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import Style from "./style";
import { Link, useParams } from "react-router-dom";
import ImageBasic from "../../../Utils/ImageBase/imageBase";
import renderRateColor from "../../../Utils/CollorRating";
import DateChanger from "../../../Utils/DateChanger/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorPallet } from "../../../Theme/commonStyle";
import {
  faClosedCaptioning,
  faFolder,
} from "@fortawesome/free-regular-svg-icons";
import MovieListByGenre from "../../ListByGenres/FilterList";
import renderMovieGenres from "../../../Utils/Genres/genres";
import { Spin } from "antd";

export default function Holder(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPopularMoviesApi();
    getPopularSeriesApi();
  }, [id]);

  async function getPopularMoviesApi() {
    try {
      setLoading(true);
      const response = await api.get(`movie/popular`, {
        params: {
          language: "en-US",
          page: "1",
        },
      });
      console.log(response);
      setMovie(response.data.results.slice(0, 10));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  }

  async function getPopularSeriesApi() {
    try {
      setLoading(true);
      const response = await api.get(`tv/popular`, {
        params: {
          language: "en-US",
          page: "1",
        },
      });
      console.log(response);
      setSeries(response.data.results.slice(0, 15));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  }

  function renderPopularMovies() {
    if (loading) {
      return <Spin size="large" />;
    }

    if (!movie || movie.length === 0) {
      return <p>No popular movies found</p>;
    }
    return movie.map(
      ({
        title,
        id,
        poster_path,
        genre_ids,
        overview,
        release_date,
        vote_average,
        vote_count,
      }) => (
        <li key={id} className="flex justifyBetween alignCenter relative">
          <div className="coverBox">
            <Link to={`/m/${id}`}>
              <img src={`${ImageBasic.wUrl}${poster_path}`} alt={title} />
            </Link>
          </div>
          <div className="movieDetails">
            <div className="titleContent flex justifyBetween">
              <div className="left">
                <div className="title mb-5">
                  <h1>{title}</h1>
                </div>
                <p className="date mb-2">
                  <DateChanger dateString={release_date} />
                </p>
              </div>
              <div className="right">
                <div className="imdbHolder flex justifyBetween gap-2">
                  <div className="rateNum">
                    <strong
                      className={`voteColor ${renderRateColor(vote_average)}`}
                    >
                      {vote_average.toFixed(1)}
                    </strong>
                    <small>/10</small>
                    <span className="voteNum flex">
                      <b>Votes:</b> {vote_count}
                    </span>
                  </div>
                  <div className="imdb">
                    <a
                      href="https://www.imdb.com/title/${imdb_id}/"
                      target="_blank"
                    >
                      <h3>IMDb</h3>
                    </a>
                  </div>
                </div>
              </div>

              <div className="subtitlesItem absolute">
                <div className="ccIcon absolute">
                  <FontAwesomeIcon className="icon" icon={faClosedCaptioning} />
                </div>
              </div>
            </div>
            <div>
              <div className="genres mb-2">
                <p className="flex alignCenter gap-2">
                  <FontAwesomeIcon
                    icon={faFolder}
                    style={{ color: `${colorPallet.primaryColor}` }}
                  />
                  <b>Genres:</b>
                  {renderMovieGenres(genre_ids).map((genre, index) => (
                    <span
                      key={index}
                      className="flex justifyBetween alignCenter"
                    >
                      {genre}
                      {index < genre_ids.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
              <div className="overview">
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </li>
      )
    );
  }

  function renderPopularTv() {
    if (!series) return "";
    return series.map(
      ({
        name,
        first_air_date,
        id,
        poster_path,
        genre_ids,
        overview,
        vote_average,
        vote_count,
      }) => (
        <li key={id} className="flex justifyBetween alignCenter relative">
          <div className="coverBox">
            <Link to="#">
              <img src={`${ImageBasic.wUrl}${poster_path}`} alt={name} />
              <p className="text">{name}</p>
            </Link>
          </div>
        </li>
      )
    );
  }

  return (
    <Style>
      <div className="holderSection relative z-2">
        <div className="wrapper">
          <div className="holderWrapper flex justifyBetween gap-8">
            <div className="mainBar">
              <ul className="movieInfo">{renderPopularMovies()}</ul>
            </div>
            <div className="sideBar">
              <div className="sideBarBox">
                <div className="tvShows">
                  <h1 className="title">Updated TvShows</h1>
                  <ul className="seriesInfo">{renderPopularTv()}</ul>
                </div>
                <div className="genreList">
                  <MovieListByGenre
                    title="Movies Filter"
                    apiLink="genre/movie/list"
                  />
                  <MovieListByGenre
                    title="TvShows Filter"
                    apiLink="genre/tv/list"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
