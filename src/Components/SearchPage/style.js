import styled from "styled-components";
import { colorPallet, defaultCss } from "../../Theme/commonStyle";

export const Style = styled.div`
  .heroWrapper {
    padding: 40px 0;
    .searchBox {
      .title {
        color: ${colorPallet.darkTextColor};
      }
      .Box {
        width: 85%;
        .input {
          font-family: "PT Sans", sans-serif;
          font-weight: 400;
          font-style: normal;
          border-radius: ${defaultCss.primaryBorderRadius};
          height: 50px;
          width: 100%;
          padding: 10px;
          bottom: 80%;
          top: 80%;
          outline: none;
          color: ${colorPallet.primaryColor};
          &::placeholder {
            color: ${colorPallet.primaryColor};
            font-family: "PT Sans", sans-serif;
            font-weight: 400;
          }
          &:focus {
            border: 2px solid red;
          }
        }
        .button {
          right: 0;
          height: 50px;
          border-radius: ${defaultCss.primaryBorderRadius};
          font-size: 13px;
          /* background: linear-gradient(
        45deg,
        ${colorPallet.primaryColor},
        #c0c0c0
      ); */
          cursor: pointer;
        }
      }
    }
    .searchContent {
      .result {
        margin: 30px 0;
        .textResult {
          color: ${colorPallet.darkTextColor};
        }
        .resultList {
          .noResult {
            .textNoResult {
              color: ${colorPallet.primaryColor};
              font-size: 2rem;
            }
          }
          li {
            .noPic {
              width: 150px;
              height: 200px;
              border: 2px solid ${colorPallet.primaryColor};
              border-radius: ${defaultCss.primaryBorderRadius};
              background-color: rgba(255, 255, 255, 0.8);
              margin: auto;
              .iconPlace {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                .icon {
                  color: ${colorPallet.primaryColor};
                  font-size: medium;
                }
              }
            }
            .poster {
              margin: auto;
              &::before {
                position: absolute;
                width: 100%;
                height: 100%;
                content: "";
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.5);
                opacity: 0;
              }
              &:hover {
                &::before {
                  opacity: 1;
                  border-radius: ${defaultCss.primaryBorderRadius};
                }
                .icon {
                  opacity: 1;
                }
                border: 1px solid ${colorPallet.primaryColor};
                border-radius: ${defaultCss.primaryBorderRadius};
              }
              width: 150px;
              height: 200px;
              border: 2px solid #fff;
              border-radius: ${defaultCss.primaryBorderRadius};
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: ${defaultCss.primaryBorderRadius};
              }
              .voteColor {
                background: ${colorPallet.backgroundColor};
                bottom: -10px;
                left: 5px;
                width: 30px;
                height: 30px;
                text-align: center;
                align-content: center;
                border-radius: 15px;
                border: 2px solid ${colorPallet.primaryColor};
              }
              strong.green {
                color: #42f5b6;
              }
              strong.orange {
                color: #f5bf42;
              }
              strong.red {
                color: ${colorPallet.primaryColor};
              }
              strong.black {
                color: #000;
              }
              .icon {
                width: 30px;
                height: 30px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                .playIcon {
                  font-size: 3rem;
                  width: 100%;
                  height: 100%;
                  color: ${colorPallet.primaryColor};
                }
              }
            }
            .title,
            .date {
              color: ${colorPallet.darkTextColor};
            }
          }
        }
      }
    }
  }
  .loadingIndicator {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh; /* Full viewport height */
  }
`;
export default Style;
