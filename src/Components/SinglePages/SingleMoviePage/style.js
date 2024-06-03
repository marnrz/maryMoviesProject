import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../Theme/commonStyle";

const Style = styled.div`
  padding: 30px 0;
  .heroHolder {
    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #050505;
    background-size: cover;
    height: 100vh;
    min-height: 600px;
    .heroHolderWrapper {
      .coverBox {
        width: 30%;
        margin-top: 40px;

        img {
          border: 3px solid ${colorPallet.primaryColor};
          border-radius: ${defaultCss.primaryBorderRadius};
          width: 100%;
          height: 100%;
        }
      }
      .meta {
        width: 68%;
        .headMeta {
          width: 100%;
          .left {
            .title {
              color: ${colorPallet.darkTextColor};
            }
          }
          .right {
            .imdbHolder {
              .rateNum {
                font-size: 14px;
                color: ${colorPallet.darkTextColor};
                text-align: center;
                .voteColor {
                  margin-left: 5px;
                  font-size: 130%;
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
                .ten {
                  font-size: 85%;
                }
                .voteNum {
                  width: 65px;
                  display: block;
                  border-top: 1px solid ${colorPallet.primaryColor};
                  padding-top: 7px;
                  margin: 5px 0;
                }
              }
              .imdb {
                margin-top: 10px;
                h3 {
                  border: 2px solid ${colorPallet.primaryColor};
                  border-radius: 5px;
                  color: #fff;
                  padding: 2px;
                  font-size: 18px;
                  background: ${colorPallet.primaryColor};
                  text-align: center;
                }
                /* .icon {
                        font-size: 35px;
                        margin-left: 10px;
                      } */
              }
            }
          }
        }
        .metaItem {
          .list {
            .listHolder {
              font-size: 15px;
              .icon {
                color: ${colorPallet.primaryColor};
                .iconDe {
                  width: 17px;
                  height: 17px;
                }
              }
              .labItem {
                color: ${colorPallet.darkTextColor};
              }
              .renderItem {
                color: ${colorPallet.darkTextColor};
                .box {
                }
              }
            }
          }
          .plotText {
            font-size: 15px;
            font-weight: 400;
            line-height: 22px;
            color: ${colorPallet.darkTextColor};
          }
        }
      }
    }
  }
`;
export default Style;
