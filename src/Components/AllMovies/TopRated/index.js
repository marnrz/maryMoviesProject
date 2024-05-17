import { useEffect, useState, useRef } from "react";
import api from "../../../Utils/Api/api";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import ImageBasic from "../../../Utils/ImageBase/imageBase";
import Style from "./style";

export default function TopRated() {
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

  //   function handlePaginationClick(pageNumber) {
  //     setCurrentPage(pageNumber);
  //   }

  function renderTopRatedMovie() {
    return moviesData.map(({ id, poster_path }) => (
      <li key={id} className="relative swiper-slide">
        <Link to="#">
          <div className="topRatedBox">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="swiperSlide">
                <img src={`${ImageBasic.wUrl}${poster_path}`} />
              </SwiperSlide>
            </Swiper>
          </div>
        </Link>
      </li>
    ));
  }

  return (
    <Style>
      <div className="topRated">
        <ul className="list flex">{renderTopRatedMovie()}</ul>
      </div>
    </Style>
  );
}
