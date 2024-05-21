import { useEffect, useState } from "react";
import api from "../../Utils/Api/api";
import Style from "./style";
import { useParams } from "react-router-dom";
import ImageBasic from "../../Utils/ImageBase/imageBase";

export default function Holder() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getMoviesApi();
  }, [id]); // Run effect only when id changes

  async function getMoviesApi() {
    try {
      setLoading(true);
      const response = await api.get(`movie/${id}`, {
        params: {
          append_to_response: "credits",
        },
      });
      console.log(response);
      setMovie(response.data.movie);
      setCredits(response.data.credits.crew.slice(0, 1));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  }
  function getMovies() {
    if (movie === null || movie === undefined) return "";
    return movie.map(({ name, id, poster_path }) => {
      return (
        <li key={id}>
          <div className="coverBox">
            <img src={`${ImageBasic.wUrl}${poster_path}`} alt={name} />
          </div>
          <div className="movieDetails">
            <h2>{name}</h2>
            <p>{getMovieDirector()}</p>
          </div>
        </li>
      );
    });
  }

  function getMovieDirector() {
    if (credits === null || credits === undefined) return "";
    credits.map(({ known_for_department, name }) => {
      if (known_for_department == "Directing") {
        credits.push(name);
      }
    });
    return credits.slice(0, 1).toString();
  }

  return (
    <Style>
      <div className="holderSection">
        <div className="wrapper">
          <div className="holderWrapper">
            <div className="mainBar">
              <ul className="movieInfo">{getMovies()}</ul>
            </div>
            <div className="sideBar"></div>
          </div>
        </div>
      </div>
    </Style>
  );
}
