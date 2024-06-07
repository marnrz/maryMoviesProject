import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../Theme/commonStyle";

export const Style = styled.div`
  .accordion {
    .accordionWrapper {
      .collaps {
        .ant-space {
          width: ${defaultCss.fullWidth};
          .ant-collapse {
            border: 2px solid ${colorPallet.primaryColor};
            background-color: ${colorPallet.darkSecondaryBackgroundColor};
            .ant-collapse-header {
              display: flex;
              align-items: center;
              color: ${colorPallet.primaryColor};
            }
            .ant-collapse-content {
              .mySwiper {
                width: 100%;
                height: auto;
                padding-top: 20px;
                padding-bottom: 50px;
                .swiper-button-prev,
                .swiper-button-next {
                  font-size: 1.2rem;
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 56px;
                  height: 56px;
                  background-color: rgba(36, 36, 36, 0.5);
                  color: ${colorPallet.primaryColor};
                  border-radius: 100%;
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                .list {
                  height: 300px;
                  .swiperSlide {
                    background-size: cover;
                    width: 140px;
                    height: 280px;
                    cursor: pointer;
                    a {
                      li {
                        width: 100%;
                        height: 100%;
                        background-color: ${colorPallet.darkSecondaryBackgroundColor};
                        border-radius: ${defaultCss.primaryBorderRadius};
                        .poster {
                          height: 210px;
                          width: 100%;
                          img {
                            border-radius: 10px 10px 0 0;
                            width: 100%;
                            height: auto;
                            object-fit: cover;
                          }
                        }
                        .info {
                          color: ${colorPallet.darkTextColor};
                          padding: 10px;
                        }
                      }
                    }
                  }
                }
              }

              .imageList {
                li {
                  .poster {
                    height: 80px;
                    width: 140px;
                    img {
                      border-radius: ${defaultCss.primaryBorderRadius};
                      width: 100%;
                      height: auto;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default Style;
