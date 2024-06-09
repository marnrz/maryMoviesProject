import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../Theme/commonStyle";

export const Style = styled.div`
  .holderSection {
    .holderWrapper {
      .mainBar {
        width: 70%;

        .movieInfo {
          li {
            border-radius: ${defaultCss.primaryBorderRadius};
            background-color: ${colorPallet.darkSecondaryBackgroundColor};
            margin-top: 32px;
            padding: 16px;
            height: 360px;
            &:first-child {
              margin-top: 25px;
            }
            .coverBox {
              width: 30%;
              height: 100%;
              padding: 8px;
              img {
                border-radius: ${defaultCss.primaryBorderRadius};
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            .movieDetails {
              width: 70%;
              color: ${colorPallet.darkTextColor};
              min-height: 200px;
              height: 100%;
              padding-right: 32px;
              padding-left: 24px;
              margin-top: 32px;
              .titleContent {
                .left {
                  width: 75%;
                  .date {
                    font-size: 1.4rem;
                  }
                }
                .right {
                  width: 20%;
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
              .overview,
              .genres {
                font-size: 1.2rem;
                line-height: 1.7;
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
                margin-bottom: 32px;
                .coverBox {
                  width: 100%;
                  height: 160px;

                  img {
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 25% 20%;
                  }
                  .text {
                    background-color: rgba(39, 31, 31, 0.87);
                    color: #fff;
                    padding: 10px;
                    font-weight: 700;
                    text-align: center;
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                  }
                }
              }
              li:nth-child(1) {
                .coverBox {
                  height: 400px;
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
