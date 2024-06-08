import { Collapse, Space, Spin, Image } from "antd";
import api from "../../../Utils/Api/api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageBasic from "../../../Utils/ImageBase/imageBase";
import Style from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Year } from "../../../Utils/DateChanger/date";

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
          include_image_language: "en,null",
        },
      });
      setCasts(response.data.credits.cast.slice(0, 6));
      setImages(response.data.images.backdrops.slice(0, 6));
      setSimilar(response.data.similar.results.slice(0, 6));
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
    return (
      <ul className="list flex gap-2">
        {casts.map(({ name, profile_path, character }, index) => (
          <Link to="#">
            <li key={index}>
              <div className="poster">
                <img
                  src={`${ImageBasic.wUrl}${profile_path}`}
                  alt={`Backdrop ${index + 1}`}
                />
              </div>
              <div className="info">
                <h4>{name}</h4>
                <h5>{character}</h5>
              </div>
            </li>
          </Link>
        ))}{" "}
      </ul>
    );
  }

  function renderImages() {
    return (
      <Image.PreviewGroup>
        <ul className="imageList flex wrap gap-2">
          {images.map((image, index) => (
            <li key={index}>
              <div className="poster">
                <Image
                  src={`${ImageBasic.wUrl}${image.file_path}`}
                  alt={`Backdrop ${index + 1}`}
                  style={{ width: "100%" }} // Adjust the width as needed
                  preview={{
                    src: `${ImageBasic.originalUrl}${image.file_path}`,
                  }} // Original image for Lightbox
                />
              </div>
            </li>
          ))}
        </ul>
      </Image.PreviewGroup>
    );
  }

  function renderSimilar() {
    console.log("Similar Movies:", similar);
    if (similar.length === 0) {
      return <p>No similar movies available.</p>;
    }
    return (
      <ul className="list flex gap-2">
        {similar.map(({ id: movieId, title, poster_path, name }, index) => (
          <Link to="#">
            <li key={movieId}>
              <div className="poster">
                <img
                  src={`${ImageBasic.wUrl}${poster_path}`}
                  alt={`Backdrop ${index + 1}`}
                />
              </div>
              <div className="info">
                <h4>
                  {title || name}
                  <Year />
                </h4>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    );
  }
  function renderFarm() {
    return (
      <div className="collaps">
        <Space direction="vertical">
          <Collapse
            collapsible="header"
            items={[
              {
                key: "1",
                label: <h2>Casts</h2>,
                children: <Spin spinning={loading}>{renderCasts()}</Spin>,
              },
            ]}
          />
          <Collapse
            collapsible="icon"
            items={[
              {
                key: "1",
                label: <h2>Images</h2>,
                children: <Spin spinning={loading}>{renderImages()}</Spin>,
              },
            ]}
          />

          <Collapse
            collapsible="icon"
            items={[
              {
                key: "1",
                label: <h2>Similars</h2>,
                children: <Spin spinning={loading}>{renderSimilar()}</Spin>,
              },
            ]}
          />
        </Space>
      </div>
    );
  }

  return (
    <Style>
      <div className="accordion">
        <div className="wrapper">
          <div className="accordionWrapper">{renderFarm()}</div>
        </div>
      </div>
    </Style>
  );
}
