import { useEffect, useState } from "react";
import api from "../../../Utils/Api/api";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageBasic from "../../../Utils/ImageBase/imageBase";
import Style from "./style";

export default function SwiperTopRated() {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(3);

  useEffect(() => {
    getTopRatedApi();
  }, [currentPage]);

  async function getTopRatedApi() {
    try {
      setLoading(true);
      const response = await api.get("movie/top_rated", {
        params: {
          language: "en-US",
          page: currentPage,
        },
      });
      setMoviesData(response.data.results.slice(0, 20));
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  function renderTopRatedMovies() {
    return moviesData.map(({ id, poster_path, title }) => (
      <SwiperSlide key={id} className="swiperSlide">
        <Link to="#">
          <div className="topRatedBox">
            <img
              className="poster"
              src={`${ImageBasic.wUrl}${poster_path}`}
              alt={`Movie ${id}`}
            />
            <p className="text">{title}</p>
          </div>
        </Link>
      </SwiperSlide>
    ));
  }

  return (
    <Style>
      <div className="topRated relative z-2">
        <div className="wrapperFull">
          <div className="topRatedFull ">
            <h2 className="title">TopRated Movies</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Swiper
                effect={"coverflow"}
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={"5"}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 90,
                  modifier: 0.8,
                  slideShadows: false,
                }}
                autoplay={true}
                navigation={true}
                pagination={false}
                modules={[EffectCoverflow, Navigation, Pagination]}
                className="mySwiper"
              >
                {renderTopRatedMovies()}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </Style>
  );
}
