import styled from "styled-components";
import { defaultCss } from "../../Theme/commonStyle";

export const Style = styled.div`
  .showListWrapper {
    .title {
    }
    .movieList {
      .list {
        li {
          .noPic {
            .iconPlace {
              .icon {
              }
            }
          }
          .cover {
            img {
              width: 100%;
              height: 260px;
            }
            .coverHover {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              .right {
                &::before {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  content: "";
                  top: 0;
                  left: 0;
                  background-image: url("/assets/images/logo/right bg.png");
                  opacity: 0;
                }
                &:hover {
                  &::before {
                    opacity: 1;
                    border-radius: ${defaultCss.primaryBorderRadius};
                  }
                }
              }
              .left {
              }
            }
            .name {
            }
          }
        }
      }
    }
  }
`;
export default Style;
