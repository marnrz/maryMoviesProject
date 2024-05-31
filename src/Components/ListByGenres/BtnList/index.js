import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../Utils/Api/api";
import Style from "./style";

export default function BtnGenres() {
  const [genreData, setGenreData] = useState({ genres: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGenresApi();
  }, []);

  async function getGenresApi() {
    setLoading(true);
    try {
      const response = await api.get(`genre/movie/list`, {
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

  return (
    <Style>
      <div className="genres">
        <div className="wrapperFull">
          <div className="genresWrapper relative z-2">
            {loading ? (
              "please wait..."
            ) : (
              <ul className=" list flex wrap justifyCenter alignItem">
                {genreData.genres.map(({ id, name }) => (
                  <li key={id}>
                    <Link to="#" className="tag">
                      <p className="name">{name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Style>
  );
}
