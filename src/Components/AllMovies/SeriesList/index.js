import { useEffect, useState } from "react";
import ImageBasic from "../../../Utils/ImageBase/imageBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRotate } from "@fortawesome/free-solid-svg-icons";
import Style from "./style";
import { Link, useParams, useLocation } from "react-router-dom";
import api from "../../../Utils/Api/api";
import { Pagination, Space, Spin } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { colorPallet } from "../../../Theme/commonStyle";
import Layout from "../../Layouts";
import { Year } from "../../../Utils/DateChanger/date";

export default function AllSeriesList({ title, time, serverApiUrl }) {
  const { id, name } = useParams();
  const [seriesDataItem, setSeriesDataItem] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [currntPage, setCurentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    getSeriesApi(time);
  }, [currntPage, id]);
  useEffect(() => {
    document.title = ` Download ${title}`;
  }, []);

  //   Api
  async function getSeriesApi() {
    try {
      setLoading(true);
      const response = await api.get(serverApiUrl, {
        params: {
          language: "en-US",
          page: currntPage,
          with_genres: id,
        },
      });
      console.log(response);
      setSeriesDataItem(response.data.results.slice(0, 12));
      setTotalResult(response.data.total_pages);
      setLoading(false);
    } catch (e) {
      console.log("Error fetching series:", e);
      setLoading(false);
    }
  }

  //   Render
  function renderSeriesItem() {
    if (loading) {
      return <Spin size="large" />;
    }

    if (!seriesDataItem || seriesDataItem.length === 0) {
      return <p>No series found</p>;
    }
    return seriesDataItem.map(
      ({ id, poster_path, name, first_air_date, vote_average }) => {
        const itemTitle = name;
        const itemDate = first_air_date;

        const basePath =
          location.pathname.startsWith("/genres") ||
          location.pathname.startsWith("/s/trending") ||
          location.pathname.startsWith("/s/upcoming")
            ? "/s"
            : location.pathname;

        return (
          <li className="col-2 mb-3 relative" key={id}>
            <Link to={`${basePath}/${id}`}>
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
                    alt={itemTitle}
                  />
                  <div className="coverHover">
                    <div className="right">
                      <span>
                        <Space className="icon absolute">
                          <DownloadOutlined
                            style={{ color: `${colorPallet.primaryColor}` }}
                          />
                        </Space>
                      </span>
                    </div>
                    <div className="left">
                      <svg
                        className="leftBg"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 68 341"
                      >
                        <path
                          fillRule="evenodd"
                          opacity="0.851"
                          fill="rgb(0, 0, 0)"
                          d="M0.005,-0.011 C0.041,1.280 0.072,2.584 0.072,4.005 C0.072,36.067 8.486,60.983 15.910,76.735 L57.177,133.667 C70.853,152.534 70.853,183.123 57.177,201.990 L26.908,243.749 L27.010,244.013 C27.010,244.013 0.072,278.915 0.072,336.920 C0.072,338.357 0.041,339.675 0.005,340.981 L0.005,-0.011 Z"
                        ></path>{" "}
                      </svg>
                      <span>Download</span>
                    </div>
                  </div>
                </div>
              )}
              <h4 className="name mt-4 mb-1 flex gap-1 justifyCenter textCenter">
                {itemTitle}
                <Year dateString={itemDate} />
              </h4>
            </Link>
          </li>
        );
      }
    );
  }

  // Utils functions

  function onChange(page, pageSize) {
    setCurentPage(page);
  }

  if (seriesDataItem === null || seriesDataItem === undefined) return "";
  return (
    <Layout>
      {" "}
      <Style>
        <div className="showList">
          <div className="wrapper">
            <div className="showListWrapper relative z-2">
              <div className="title flex justifyCenter textCenter mb-5">
                <h3>{title}</h3>
              </div>
              <div className="movieList">
                <ul className="list flex wrap mt-6">{renderSeriesItem()}</ul>

                <div className="customPagination textCenter mt-6">
                  <Pagination
                    current={currntPage}
                    pageSize={12}
                    total={totalResult}
                    showSizeChanger={false}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Style>
    </Layout>
  );
}
