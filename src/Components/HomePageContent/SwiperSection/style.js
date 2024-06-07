import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../Theme/commonStyle";

export const Style = styled.div`
  .topRated {
    margin-top: 70px;
    .topRatedFull {
      .title {
        border: 1px solid #eb8307;
        background-color: rgba(36, 36, 36, 0.7);
        color: #eb8307;
        padding: 7px 10px;
        text-align: center;
        border-radius: ${defaultCss.secondaryBorderRadius};
        display: inline;
        font-weight: 500;
        word-spacing: 1px;
        letter-spacing: 0.2px;
      }
      .mySwiper {
        width: 100%;
        padding-top: 20px;
        padding-bottom: 50px;
        .swiper-button-prev {
          color: ${colorPallet.primaryColor};
          background-color: rgba(36, 36, 36, 0.7);
          width: 58px;
          height: 58px;
          border-radius: 100%;
        }
        .swiper-button-next {
          color: #fff;
          color: ${colorPallet.primaryColor};
          background-color: rgba(36, 36, 36, 0.7);
          width: 58px;
          height: 58px;
          border-radius: 100%;
        }
        .swiperSlide {
          background-position: center;
          background-size: cover;
          width: 250px;
          height: 250px;
          cursor: pointer;
          .topRatedBox {
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.3);
              width: 100%;
              height: 100%;
            }
            width: 100%;
            height: 100%;

            .poster {
              display: block;
              width: 100%;
              height: 100%;
            }
            .text {
              left: 0%;
              top: 90%;
              color: #fff;
              padding: 10px;
              font-weight: 700;
              width: 100%;
              height: 100%;
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
`;
export default Style;
