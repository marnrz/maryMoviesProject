import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../Theme/commonStyle";

export const Style = styled.div`
  .holderSection {
    .holderWrapper {
      .mainBar {
        width: 75%;

        .movieInfo {
          li {
            border-radius: ${defaultCss.primaryBorderRadius};
            background-color: ${colorPallet.darkSecondaryBackgroundColor};
            margin-top: 25px;
            padding: 15px;
            .coverBox {
              width: 25%;
              img {
                border-radius: ${defaultCss.primaryBorderRadius};
                width: 150px;
                height: auto;
              }
            }
            .movieDetails {
              width: 75%;
              color: ${colorPallet.darkTextColor};
              min-height: 200px;
              height: auto;
              padding-right: 30px;
              margin-left: 10px;
              .titleContent {
                .left {
                  .date {
                    font-size: 1.4rem;
                  }
                  .genres {
                    font-size: 1.4rem;
                  }
                  .overview {
                    font-size: 1.2rem;
                  }
                }
                .right {
                  .imdbHolder {
                    .rateNum {
                      font-size: 1.2rem;
                      text-align: center;
                      .voteColor {
                        margin-left: 5px;
                      }
                      .voteColor.green {
                        color: #42f5b6;
                      }
                      .voteColor.orange {
                        color: #f5bf42;
                      }
                      .voteColor.red {
                        color: #9a0c1f;
                      }
                      .voteColor.black {
                        color: #000;
                      }
                      .voteNum {
                        width: 65px;
                        display: block;
                        border-top: 1px solid rgba(255, 255, 255, 0.2);
                        padding-top: 7px;
                        margin: 5px 0;
                      }
                    }
                    .imdb {
                      h3 {
                        border: 2px solid ${colorPallet.primaryColor};
                        border-radius: 5px;
                        color: ${colorPallet.primaryColor};
                        padding: 3px;
                      }
                      /* .icon {
                        font-size: 35px;
                        margin-left: 10px;
                      } */
                    }
                  }
                }
                .subtitlesItem {
                  right: -24px;
                  top: 50%;
                  width: 48px;
                  height: 48px;
                  transform: rotate(45deg);
                  border-radius: 5px;
                  background-color: ${colorPallet.secondaryColor};
                  .ccIcon {
                    top: 26%;
                    left: 24%;
                    transform: rotate(-45deg);
                    .icon {
                      color: ${colorPallet.darkSignColor};
                      font-size: 2.3rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .sideBar {
        width: 25%;
        .sideBarBox {
          .tvShows {
            border-radius: ${defaultCss.primaryBorderRadius};
            background-color: ${colorPallet.darkSecondaryBackgroundColor};
            margin-top: 25px;
            padding: 15px;
            .title {
              text-align: center;
              color: ${colorPallet.darkTextColor};
              margin-bottom: 20px;
            }
            .seriesInfo {
              li {
                margin-bottom: 60px;
                .coverBox {
                  width: 190px;
                  height: 60px;
                  img :nth-child(1) {
                    border-radius: 10px 10px 0 0;
                    width: 190px;
                    height: 160px;
                    object-fit: cover;
                  }
                  img {
                    border-radius: 10px 10px 0 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 25% 20%;
                  }
                  .text {
                    background-color: rgba(255, 255, 255, 0.2);
                    border-radius: 0 0 10px 10px;
                    color: #fff;
                    padding: 10px;
                    font-weight: 700;
                    text-align: center;
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
