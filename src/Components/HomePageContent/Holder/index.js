import { useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import Style from "./style";
import { Link, useParams } from "react-router-dom";
import ImageBasic from "../../../Utils/ImageBase/imageBase";
import renderRateColor from "../../../Utils/CollorRating";
import DateChanger from "../../../Utils/DateChanger/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { colorPallet } from "../../../Theme/commonStyle";
import {
  faClosedCaptioning,
  faFolder,
} from "@fortawesome/free-regular-svg-icons";
import MovieListByGenre from "../ListByGenres";
import renderMovieGenres from "../../../Utils/Genres/genres";

export default function Holder(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [series, setSeries] = useState([]);
  //   const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getPopularMoviesApi();
    getPopularSeriesApi();
  }, [id]);

  // Api
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
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
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
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  }

  //   render function
  function renderPopularMovies() {
    if (movie === null || movie === undefined) return "";
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
      }) => {
        return (
          <li key={id} className="flex justifyBetween alignCenter relative ">
            <div className="coverBox ">
              <Link to="#">
                <img src={`${ImageBasic.wUrl}${poster_path}`} alt={title} />
              </Link>
            </div>
            <div className="movieDetails">
              <div className="titleContent flex justifyBetween">
                <div className="left">
                  <h1>{title}</h1>
                </div>
                <div className="right">
                  <div className="imdbHolder">
                    <div className="rateNum">
                      <strong
                        className={`voteColor ${renderRateColor(vote_average)}`}
                      >
                        {vote_average.toFixed(1)}
                      </strong>
                      <small>/10</small>
                      <span className="voteNum">
                        <b>Votes:</b> {vote_count}
                      </span>
                    </div>
                    <div className="imdb">
                      <a href="#">
                        <FontAwesomeIcon
                          className="icon"
                          icon={faImdb}
                          style={{ color: `${colorPallet.primaryColor}` }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <DateChanger dateString={release_date} />
              </p>
              <div className=" genres ">
                <p className="flex alignCenter gap-2">
                  <FontAwesomeIcon
                    icon={faFolder}
                    style={{ color: `${colorPallet.primaryColor}` }}
                  />
                  <b>Genres:</b>
                  {renderMovieGenres(genre_ids)}
                </p>
              </div>
              <div className="overview">
                <p>{overview}</p>
              </div>
            </div>
            <div className="subtitlesItem absolute">
              <div className="ccIcon absolute">
                <FontAwesomeIcon className="icon" icon={faClosedCaptioning} />
              </div>
            </div>
          </li>
        );
      }
    );
  }
  function renderPopularTv() {
    if (series === null || series === undefined) return "";
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
      }) => {
        return (
          <li key={id} className="flex justifyBetween alignCenter relative">
            <div className="coverBox ">
              <Link to="#">
                <img src={`${ImageBasic.wUrl}${poster_path}`} alt={name} />
                <p className="text">{name}</p>
              </Link>
            </div>
          </li>
        );
      }
    );
  }

  //   function renderMovieDirector() {
  //     if (credits === null || credits === undefined) return "";
  //     credits.map(({ known_for_department, name }) => {
  //       if (known_for_department == "Directing") {
  //         credits.push(name);
  //       }
  //     });
  //     return credits.slice(0, 1).toString();
  //   }

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
