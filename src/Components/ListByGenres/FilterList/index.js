import { useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import Style from "./style";
import { Space } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { colorPallet } from "../../../Theme/commonStyle";

export default function MovieListByGenre({ title, apiLink }) {
  const [genreData, setGenreData] = useState({ genres: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGenresApi();
  }, []);
  async function getGenresApi() {
    setLoading(true);
    try {
      const response = await api.get(apiLink, {
        params: {
          language: "en-US",
        },
      });
      setGenreData(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  //   const onClick = (e) => {
  //     console.log("click", e);
  //   };
  return (
    <Style>
      <div className="genresList">
        <div className="title flex alignCenter gap-2 justifyCenter">
          <FontAwesomeIcon
            icon={faVideo}
            style={{ color: `${colorPallet.primaryColor}` }}
            fontSize={"2rem"}
          />
          <h1>{title}</h1>
        </div>
        {loading ? (
          "please wait..."
        ) : (
          <ul className="list">
            {genreData.genres.map(({ id, name }) => (
              <li key={id}>
                <Link to="#" className="tag">
                  <Space>
                    <RightOutlined />
                  </Space>
                  <span className="text">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Style>
  );
}
