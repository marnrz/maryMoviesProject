import { faCameraRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ImageBasic from "../ImageBase/imageBase";
import { colorPallet } from "../../Theme/commonStyle";
import { Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Year } from "../DateChanger/date";
import Style from "./style";

export default function renderMovieItem(moviesDataItem) {
  if (!moviesDataItem || moviesDataItem.length === 0) {
    return <p>No similar movies available.</p>;
  }
  return moviesDataItem.map((cur, i) => {
    return (
      <Style>
        <li className="col-2 relative" key={i}>
          <Link to="#">
            {cur.poster_path == null ? (
              <div className="noPic relative">
                <span className="iconPlace absolute">
                  <FontAwesomeIcon className="icon" icon={faCameraRotate} />
                </span>
              </div>
            ) : (
              <div className="cover relative">
                <img
                  src={`${ImageBasic.wUrl}${cur.poster_path}`}
                  alt={cur.title || cur.name}
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
                        fill-rule="evenodd"
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
            <h2 className=" name mt-4 mb-1 flex gap-1 justifyCenter textCenter">
              {cur.title || cur.name}
              <Year dateString={cur.release_date || cur.first_air_date} />
            </h2>
          </Link>
        </li>
      </Style>
    );
  });
}
