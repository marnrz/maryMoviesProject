import { Collapse, Space } from "antd";
import api from "../../../Utils/Api/api";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageBasic from "../../../Utils/ImageBase/imageBase";
import AllMovieList from "../../AllMovies/MovieLIst";

export default function Accordion() {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getMoviesApi();
  }, [id]); // Run effect only when id changes

  async function getMoviesApi() {
    try {
      setLoading(true);
      const response = await api.get(`movie/${id}`, {
        params: {
          language: "en-US",
          append_to_response: "credits,similar,images",
        },
      });
      setCasts(response.data.casts.cast.slice(0, 14));
      setImages(response.data.images.backdrops.slice(0, 14));
      setSimilar(response.data.similar.results.slice(0, 9));
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  }

  function renderCasts() {
    if (casts.length === 0) {
      return <p>No cast information available.</p>;
    }
    return images.map(({ name, profile_path, character }, index) => (
      <li key={index}>
        <div className="poster">
          <img
            src={`${ImageBasic.wUrl}${profile_path}`}
            alt={`Backdrop ${index + 1}`}
          />
        </div>
        <div className="info">
          <h4>{name}</h4>
          <h3>{character}</h3>
        </div>
      </li>
    ));
  }

  function renderImages() {
    return (
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img
              src={`${ImageBasic.wUrl}${image.file_path}`}
              alt={`Backdrop ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    );
  }
  function renderFarm() {
    return (
      <Space direction="vertical">
        <Collapse
          collapsible="header"
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: "Casts",
              children: renderCasts(),
            },
          ]}
        />
        <Collapse
          collapsible="icon"
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: "Images",
              children: renderImages(),
            },
          ]}
        />
        <Collapse
          collapsible="icon"
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: "Similars",
              children: "",
            },
          ]}
        />
      </Space>
    );
  }

  return (
    <Fragment>
      <div className="accordion">
        <div className="wrapper">
          <div className="accordionWrapper">
            {loading ? <p>Loading...</p> : <ul>{renderFarm()}</ul>}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
