import styled from "styled-components";
import { colorPallet } from "../../../../Theme/commonStyle";

export const Style = styled.div`
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: ${colorPallet.primaryColor};
    animation: spin 1s linear infinite;
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }
  .UpComing {
    .titleBox {
      .title {
        font-size: 2rem;
        color: ${colorPallet.darkTextColor};
      }
      .viewMore {
        &:hover {
          .textViewMore {
            color: ${colorPallet.primaryColor};
          }
          .icon {
            color: ${colorPallet.primaryColor};
          }
        }
        font-size: 1.3rem;
        color: ${colorPallet.darkTextColor};
      }
    }
    .list {
      li {
        .noPic {
          width: 240px;
          height: 140px;
          border: 1px solid ${colorPallet.primaryColor};
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
            }
            .playIcon {
              color: ${colorPallet.primaryColor};
            }
            border: 1px solid ${colorPallet.primaryColor};
            transition: all 0.2s ease-out;
            transform: scale(1.1);
          }
          width: 100%;
          height: 140px;
          border: 1px solid #fff;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
          }
          .icon {
            width: 30px;
            height: 30px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            .playIcon {
              font-size: 3rem;
              width: 100%;
              height: 100%;
            }
          }
        }
        .infoTitle {
          color: ${colorPallet.darkTextColor};
          width: 90%;
          height: 100%;
        }
      }
    }
  }
`;
export default Style;
