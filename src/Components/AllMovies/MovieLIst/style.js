import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../Theme/commonStyle";

export const Style = styled.div`
  padding: 35px 0;
  .showListWrapper {
    .title {
      h3 {
        color: ${colorPallet.darkTextColor};
        font-size: 1.8rem;
        border-bottom: 2px solid ${colorPallet.primaryColor};
        padding-bottom: 3px;
      }
    }
    .movieList {
      .list {
        li {
          .noPic {
            width: 100%;
            height: 260px;
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
          .cover {
            img {
              width: 100%;
              height: 260px;
              border-radius: ${defaultCss.primaryBorderRadius};
            }
            .coverHover {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              overflow: hidden;
              opacity: 0;
              .right {
                position: absolute;
                top: 0;
                left: 55%;
                width: 49%;
                height: 100%;
                transition: all 0.3s ease-in-out;
                z-index: 2;

                .icon {
                  top: 55%;
                  right: 10px;
                  font-size: 25px;
                }
                &::before {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  content: "";
                  top: 0;
                  left: 0;
                  background-image: url("/assets/images/logo/right bg.png");
                  background-repeat: no-repeat;
                }
              }
              .left {
                position: absolute;
                right: 69%;
                top: -64px;
                width: 32%;
                height: 100%;
                transition: all 0.3s ease-in-out;

                .leftBg {
                  width: 100%;
                  height: 100%;
                }
                span {
                  position: absolute;
                  top: 45%;
                  left: -28%;
                  font-weight: 700;
                  letter-spacing: 1px;
                  font-size: 1.2rem;
                  color: ${colorPallet.darkTextColor};
                  transform: rotate(90deg);
                }
              }
              &:hover {
                opacity: 1;
              }
            }
            &:hover {
              .right {
                &::before {
                  border-radius: ${defaultCss.primaryBorderRadius};
                }
                .icon {
                }
              }
              .left {
              }
            }
          }
          .name {
            color: ${colorPallet.darkTextColor};
          }
        }
      }
    }
  }
`;
export default Style;
