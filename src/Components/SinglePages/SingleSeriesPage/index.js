import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../Utils/Api/api";
import ImageBasic from "../../../Utils/ImageBase/imageBase";
import Style from "./style";
import { Year } from "../../../Utils/DateChanger/date";
import renderRateColor from "../../../Utils/CollorRating";
import { renderSingleGenres } from "../../../Utils/Genres/genres";
import { colorPallet } from "../../../Theme/commonStyle";
import { Flex, Spin, Typography } from "antd";
import runTime from "../../../Utils/TimeChanger";
import renderAge from "../../../Utils/Age";

export default function HeroSingleSeriesPage() {
  const { id } = useParams();
  const [seriesData, setSeriesData] = useState([]);
  const [data, setData] = useState([]);
  const [castData, setCastsData] = useState([]);
  const [genresData, setGenresData] = useState([]);
  const [directorData, setDiretorData] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const [ageData, setAgeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [overviewExpanded, setOverviewExpanded] = useState(false);

  useEffect(() => {
    getSeriesDetailsApi();
  }, []);

  useEffect(() => {
    if (seriesData.title) {
      document.title = "Series - MaryMovie";
    }
  }, [seriesData]);

  useEffect(() => {
    setData(listItem);
  }, [genresData, castData, directorData]);

  async function getSeriesDetailsApi() {
    setLoading(true);
    try {
      const response = await api.get(`tv/${id}`, {
        params: {
          language: "en-US",
          append_to_response:
            "original_name,credits,first_air_date,release_dates",
        },
      });
      setSeriesData(response.data);
      setCastsData(response.data.credits.cast.slice(0, 3));
      setDiretorData(
        response.data.credits.crew.filter((member) => member.job === "Director")
      );
      setAuthorData(response.data.credits.crew.slice(0, 3));
      setGenresData(response.data);
      setAgeData(response.data.release_dates.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  }

  const listItem = [
    {
      icon: (
        <svg className=" iconDe">
          <use xlinkHref="#folder">
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 371.213 371.213"
              id="folder"
              fill={`${colorPallet.primaryColor}`}
            >
              {" "}
              <path d="M186.691 136.153c-3.709-4.946-9.892-7.418-17.309-7.418H98.908c-13.6 0-24.727 9.892-27.2 22.255l-1.236 9.892c-1.236 6.182 1.237 13.6 4.945 18.546 3.709 4.945 9.892 7.418 17.309 7.418H163.2c12.364 0 23.491-9.89 27.2-22.255l1.236-9.892c1.236-6.182-1.236-13.6-4.945-18.546zm-22.255 23.492c0 1.236-1.237 2.472-2.473 2.472h-68l1.236-7.418c0-1.236 1.237-2.472 2.473-2.472h68l-1.236 7.418z"></path>{" "}
              <path d="M362.254 111.426c-6.22-7.258-15.057-11.893-25.766-13.205a12.487 12.487 0 00-.198-1.63c-4.945-18.546-24.727-32.145-46.982-32.145H197.91l-31.001-32.148c-2.473-2.474-4.945-3.71-8.654-3.71H48.219C19.782 28.587 0 45.896 0 69.388v220.073c0 13.169 5.962 27.389 15.643 37.806.147.173.281.35.43.522 7.418 9.89 18.546 14.836 30.909 14.836H289.31c25.963 0 48.218-24.727 53.163-48.22l28.436-149.6c1.236-12.363-1.237-24.726-8.655-33.379zM24.729 69.391c-.001-12.364 14.835-16.074 23.49-16.074H153.31l29.673 30.909c2.201 2.201 4.891 3.416 7.635 3.658 1.72.832 3.727 1.289 5.964 1.289h92.728c8.519 0 16.309 3.625 20.605 8.653H87.783c-25.964 0-48.219 17.309-51.927 40.8l-11.128 59.993V69.391zm321.452 71.71l-28.436 149.6c-2.473 13.6-14.836 27.199-27.2 27.199H48.219c-4.788 0-9.804-2.98-13.966-7.357-2.436-4.171-3.142-8.482-2.107-13.662l28.436-153.309c1.237-12.364 13.6-21.018 27.2-21.018l236.145 1.237h6.182c6.182 0 11.127 1.236 13.6 4.945 2.472 2.473 3.708 7.42 2.472 12.365z"></path>{" "}
            </symbol>
          </use>
        </svg>
      ),
      labItem: "Genres:",
      renderItem: renderSingleGenres(genresData.genres || []),
    },
    {
      icon: (
        <svg className="iconDe">
          <use xlinkHref="#actor">
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.002 512.002"
              id="actor"
              fill={`${colorPallet.primaryColor}`}
            >
              {" "}
              <path d="M475.847 494.853l-15.333-106a15 15 0 00-13.08-12.748l-101.432-12.024v-2.282c0-7.646-5.834-14.745-15-15.007v-42.106c28.821-23.154 45.252-57.559 44.985-94.552 5.83-2.057 10.015-7.6 10.015-14.134v-75c0-6.244-3.818-11.594-9.245-13.852l-.755-42.291C375.923 29.082 346.794 0 311.001 0h-190c-8.284 0-15 6.716-15 15v29c0 25.152 10.149 47.975 26.563 64.6-3.961 2.7-6.563 7.245-6.563 12.4v75c0 6.529 4.179 12.068 10.002 14.129-.288 37.538 16.581 71.729 44.997 94.558v42.105c-9.14.261-15 7.338-15 15.007v2.47L64.124 377.118a14.999 14.999 0 00-12.972 12.761l-15 105c-1.172 8.201 4.527 15.799 12.728 16.971 8.209 1.17 15.799-4.534 16.97-12.729l13.382-93.671 86.769-10.944v41.767c0 8.284 6.716 15 15 15 23.04 0 56.744-5.569 75-21.558 18.358 16.077 52.256 21.558 75 21.558 8.284 0 15-6.716 15-15V394.29l86.469 10.251 13.685 94.606c1.188 8.212 8.81 13.884 16.993 12.698 8.199-1.186 13.885-8.793 12.699-16.992zM158.343 181a14.986 14.986 0 00-2.342-.833V136h200v45h-66.097l-.832-3.564C285.44 161.871 271.741 151 255.758 151c-15.474 0-29.066 10.442-33.053 25.394L221.477 181zM136.001 30h175c18.109 0 34.653 14.068 35.002 35.268l.728 40.732h-148.73c-34.187 0-62-27.813-62-62zm30.011 181h66.989a15 15 0 0014.494-11.135l4.198-15.741c1.12-4.202 7.169-4.141 8.165.128l3.537 15.156A15 15 0 00278.002 211h67.988c-.033 48.673-38.813 89.737-90.061 89.998-49.593-.039-89.899-40.111-89.917-89.998zm134.989 111.304v26.383c-15.25 2.273-32.902 7.125-45 17.356-12.098-10.23-29.75-15.083-45-17.355v-26.383c28.693 11.595 61.286 11.604 90-.001zm-105 98.015v-43.104c62.041 4.908 58.749 36.372 0 43.104zm120 0c-59.368-6.803-61.423-38.444 0-43.145z"></path>{" "}
              <path d="M241.001 270.343h30c8.284 0 15-6.716 15-15s-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15z"></path>{" "}
            </symbol>
          </use>
        </svg>
      ),
      labItem: "Directed by:",
      renderItem: directorData?.[0]?.name || "No Director",
    },
    {
      icon: (
        <svg className="iconDe">
          <use xlinkHref="#pen">
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-15 -15 484 484"
              id="pen"
              fill={`${colorPallet.primaryColor}`}
            >
              {" "}
              <path d="M401.648 18.234c-24.394-24.351-63.898-24.351-88.293 0l-22.101 22.223-235.27 235.145-.5.503c-.12.122-.12.25-.25.25-.25.375-.625.747-.87 1.122 0 .125-.13.125-.13.25-.25.375-.37.625-.625 1-.12.125-.12.246-.246.375-.125.375-.25.625-.379 1 0 .12-.12.12-.12.25L.663 437.32a12.288 12.288 0 002.996 12.735 12.564 12.564 0 008.867 3.625c1.356-.024 2.7-.235 3.996-.625L173.37 400.73c.121 0 .121 0 .25-.12a4.523 4.523 0 001.121-.505.443.443 0 00.254-.12c.371-.25.871-.505 1.246-.755.371-.246.75-.62 1.125-.87.125-.13.246-.13.246-.25.13-.126.38-.247.504-.5l257.371-257.372c24.352-24.394 24.352-63.898 0-88.289zM169.375 371.383l-86.914-86.91L299.996 66.938l86.914 86.91zm-99.156-63.809l75.93 75.926-114.016 37.96zm347.664-184.82l-13.238 13.363L317.727 49.2l13.367-13.36c14.62-14.609 38.32-14.609 52.945 0l33.965 33.966c14.512 14.687 14.457 38.332-.121 52.949zm0 0"></path>{" "}
            </symbol>
          </use>
        </svg>
      ),
      labItem: "Authors:",
      renderItem: authorData?.[0]?.name || "No Author",
    },
    {
      icon: (
        <svg className=" iconDe">
          <use xlinkHref="#mask">
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.004 512.004"
              id="mask"
              fill={`${colorPallet.primaryColor}`}
            >
              {" "}
              <path d="M500.999 141.637L421 119.507V15.002c0-8.284-6.716-15-15-15H15C6.705.002-.022 6.744 0 15.042l.477 179.237C.631 252.282 21.43 308.448 59.05 352.568c32.007 112.197 129.309 156.478 140.01 157.739 120.144 14.152 232.555-61.583 264.752-177.976l47.645-172.238c2.209-7.984-2.474-16.248-10.458-18.456zM30.04 30.002H391v163.706c0 106.1-75.562 194.941-180.015 212.108-104.423-16.928-180.227-105.64-180.508-211.618zm404.858 294.331C406.61 426.592 310.095 492.071 204.85 480.769c-38.75-17.806-70.721-46.29-92.702-81.635 28.28 18.339 60.754 31.191 96.574 36.694 7.922 1.214 91.468-10.621 153.232-82.614A245.115 245.115 0 00421 193.708v-43.074l57.544 15.918z"></path>{" "}
              <path d="M299.933 241.203H121.067c-8.284 0-15 6.716-15 15 0 57.584 46.848 104.433 104.433 104.433s104.433-46.848 104.433-104.433c0-8.284-6.716-15-15-15zM210.5 330.635c-35.904 0-65.954-25.557-72.914-59.433h145.828c-6.96 33.876-37.01 59.433-72.914 59.433zm-15.199-162.454c5.952-40.534-25.705-77.18-66.801-77.18-41.137 0-72.747 36.685-66.801 77.18a15 15 0 0014.841 12.82h103.92a15 15 0 0014.841-12.82zM91.753 151.002c3.485-17.095 18.637-30 36.747-30s33.262 12.905 36.747 30zm149.787 30h103.92a15.001 15.001 0 0014.841-12.82c5.952-40.534-25.705-77.18-66.801-77.18-41.137 0-72.747 36.685-66.801 77.18a15.001 15.001 0 0014.841 12.82zm51.96-60c18.109 0 33.262 12.905 36.747 30h-73.493c3.484-17.096 18.637-30 36.746-30z"></path>{" "}
            </symbol>
          </use>
        </svg>
      ),
      labItem: "Casts:",
      renderItem: renderCasts(),
    },
    {
      icon: (
        <svg className=" iconDe">
          <use xlinkHref="#timer">
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129 129"
              id="timer"
              fill={`${colorPallet.primaryColor}`}
            >
              {" "}
              <path d="M12.3 70.2c0 28.8 23.4 52.2 52.2 52.2s52.2-23.4 52.2-52.2c0-14.3-5.8-27.4-15.2-36.8l4.1-4.1 1.9 1.9c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-9.5-9.5c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l1.9 1.9-4.5 4.5c-7.6-5.6-16.7-9.1-26.7-9.9v-3.5h9.1c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1h-27c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1h9.7v3.5c-27 2.1-48.2 24.6-48.2 52zm52.2-44c24.3 0 44.1 19.8 44.1 44.1s-19.8 44.1-44.1 44.1-44.1-19.8-44.1-44.1c0-24.4 19.8-44.1 44.1-44.1z"></path>{" "}
              <path d="M64.5 73.6H82c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1H68.6V44.3c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1v25.3c0 2.2 1.8 4 4.1 4z"></path>{" "}
            </symbol>
          </use>
        </svg>
      ),
      labItem: "Run time:",
      renderItem: `${runTime(seriesData.runtime)} `,
    },
    {
      icon: (
        <svg className=" iconDe">
          <use xlinkHref="#circular_age">
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 162.978 162.978"
              id="circular_age"
              fill={`${colorPallet.primaryColor}`}
            >
              {" "}
              <path d="M162.978 101.101l-19.611-39.224-19.611 39.224h13.209c-8.315 25.958-32.633 44.826-61.324 44.826-35.529 0-64.438-28.908-64.438-64.438 0-35.529 28.909-64.438 64.438-64.438 27.376 0 50.764 17.19 60.077 41.325l6.44-12.882c-12.813-23.595-37.82-39.649-66.512-39.649C33.936 5.844 0 39.778 0 81.489c0 41.708 33.936 75.645 75.645 75.645 34.924 0 64.331-23.809 72.997-56.032h14.336z"></path>{" "}
              <path d="M35.486 96.582h7.084l2.15-7.749h8.645l2.332 7.749h7.345L53.68 66.39h-8.96l-9.234 30.192zM47.494 77.32c.493-1.749.941-4.034 1.39-5.823h.088c.449 1.789.988 4.036 1.527 5.823l1.882 6.413h-6.675l1.788-6.413zm34.243-5.598c3.311 0 5.371.583 7.029 1.294l1.436-5.466c-1.479-.715-4.482-1.48-8.377-1.48-9.901 0-17.2 5.731-17.253 15.769-.042 4.434 1.48 8.372 4.26 10.978 2.778 2.688 6.763 4.076 12.277 4.076 3.98 0 7.975-.985 10.075-1.701V79.289H79.943v5.331h4.665v6.313c-.542.274-1.798.449-3.365.449-5.604 0-9.497-3.677-9.497-9.904 0-6.534 4.296-9.756 9.991-9.756zm33.438.271v-5.598H96.539v30.187h19.265v-5.593h-12.41v-7.168h11.113v-5.56h-11.113v-6.268z"></path>{" "}
            </symbol>
          </use>
        </svg>
      ),
      labItem: "Age Rating:",
      renderItem: renderAge(ageData),
    },
  ];

  const {
    backdrop_path,
    genres,
    imdb_id,
    first_air_date,
    overview,
    original_name,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    runtime,
    spoken_languages,
    status,
    title,
    vote_average,
    vote_count,
  } = seriesData;

  function renderFarm() {
    return data.map(({ id, labItem, renderItem, icon }, index) => {
      return (
        <li key={id || index} className="listHolder flex gap-2 alignCenter">
          <span className="icon">{icon}</span>
          <h4 className="labItem">{labItem}</h4>
          <p className="renderItem flex alignCenter">{renderItem}</p>
        </li>
      );
    });
  }
  function renderCasts() {
    if (castData === null || castData === undefined) return "";
    return castData.map(({ name, id }, index) => {
      return (
        <p key={id} className="box ">
          {name}
          {index < name.length - 1 && ", "}
        </p>
      );
    });
  }

  return (
    <Style>
      <div
        className="heroHolder relative z-2"
        style={{
          backgroundImage: `url(${ImageBasic.wUrl}${backdrop_path})`,
        }}
      >
        <Flex className="wrapper">
          {loading ? (
            <Spin size="large" />
          ) : (
            <div className="heroHolderWrapper relative flex aligncenter justifyBetween">
              <div className="coverBox">
                <img
                  src={`${ImageBasic.wUrl}${poster_path}`}
                  alt={original_name}
                />
              </div>
              <div className="meta">
                <div className="headMeta flex justifyBetween wrap  ">
                  <div className="left">
                    <h1 className="title">
                      {original_name} (
                      <Year dateString={first_air_date} />)
                    </h1>
                  </div>
                  <div className="right">
                    <div className="imdbHolder">
                      <div className="rateNum">
                        <strong
                          className={`voteColor ${renderRateColor(
                            vote_average || 0
                          )}`}
                        >
                          {vote_average ? vote_average.toFixed(1) : "N/A"}
                        </strong>
                        <small className="ten">/10</small>
                        <span className="voteNum flex">
                          <b>Votes:</b> {vote_count || "N/A"}
                        </span>
                      </div>
                      <div className="imdb">
                        <a
                          href={`https://www.imdb.com/title/${imdb_id}/`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h3>IMDb</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="metaItem">
                  <ul className="list ">{renderFarm()}</ul>
                  <div>
                    <Typography.Paragraph className="plotText ">
                      {overviewExpanded && seriesData.overview
                        ? seriesData.overview
                        : `${
                            seriesData.overview
                              ? seriesData.overview.substring(0, 200)
                              : ""
                          }...`}
                      <span
                        className="pl-2"
                        onClick={() => setOverviewExpanded(!overviewExpanded)}
                        style={{ color: "#fff", cursor: "pointer" }}
                      >
                        {overviewExpanded ? "Show Less" : "Show More"}
                      </span>
                    </Typography.Paragraph>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Flex>
      </div>
    </Style>
  );
}
