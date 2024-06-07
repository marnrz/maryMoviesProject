import { Collapse, Space, Spin } from "antd";
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
      setCasts(response.data.credits.cast.slice(0, 8));
      setImages(response.data.images.backdrops.slice(0, 6));
      setSimilar(response.data.similar.results.slice(0, 8));
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
      <ul className="list flex wrap gap-2">
        {casts.map(({ name, profile_path, character }, index) => (
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
        ))}{" "}
      </ul>
    );
  }

  function renderImages() {
    return (
      <ul className="imageList flex wrap gap-2">
        {images.map((image, index) => (
          <li key={index}>
            <div className="poster">
              {" "}
              <img
                src={`${ImageBasic.wUrl}${image.file_path}`}
                alt={`Backdrop ${index + 1}`}
              />
            </div>
          </li>
        ))}
      </ul>
    );
  }
  function renderSimilar() {
    console.log("Similar Movies:", similar);
    if (similar.length === 0) {
      return <p>No similar movies available.</p>;
    }
    return (
      <Swiper
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
        slidesPerView={"4"}
      >
        <ul className="list flex wrap gap-2">
          {similar.map(({ id: movieId, title, poster_path, name }, index) => (
            <SwiperSlide key={movieId} className="swiperSlide ">
              {console.log("Current Slide Data:", {
                movieId,
                title,
                poster_path,
                name,
              })}{" "}
              <Link to={`/m/${id}`}>
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
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
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
                children: renderCasts(),
              },
            ]}
          />
          <Collapse
            collapsible="icon"
            items={[
              {
                key: "1",
                label: <h2>Images</h2>,
                children: renderImages(),
              },
            ]}
          />

          <Collapse
            collapsible="icon"
            items={[
              {
                key: "1",
                label: <h2>Similars</h2>,
                children: renderSimilar(),
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
