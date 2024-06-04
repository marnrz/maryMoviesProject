import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../../Theme/commonStyle";

export const Style = styled.div`
  .trendingWrapper {
    .titleBox {
      .title {
        font-size: 2rem;
      }
      .viewMore {
        font-size: 1.3rem;
        color: ${colorPallet.darkTextColor};
        &:hover {
          color: ${colorPallet.primaryColor};
        }
      }
    }
    .trendingBtn {
      gap: 20px;
      .title {
      }
      .btn {
        border-radius: ${defaultCss.primaryBorderRadius};
        font-weight: 600;
        height: auto;
      }
    }
    .list {
      li {
        .noPic {
          width: 150px;
          height: 200px;
          border: 1px solid ${colorPallet.primaryColor};
          border-radius: ${defaultCss.primaryBorderRadius};
          background-color: rgba(255, 255, 255, 0.8);
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
          border: 1px solid #fff;
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
      }
    }
    h2,
    h3,
    p,
    span {
      color: ${colorPallet.darkTextColor};
    }
  }
`;
export default Style;
