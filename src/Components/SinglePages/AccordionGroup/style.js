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
              .list {
                height: 310px;
                li {
                  width: 140px;
                  height: 300px;
                  background-color: ${colorPallet.darkSecondaryBackgroundColor};
                  border-radius: ${defaultCss.primaryBorderRadius};
                  .poster {
                    height: 210px;
                    width: 140px;
                    img {
                      border-radius: ${defaultCss.primaryBorderRadius};
                      width: 100%;
                      height: auto;
                    }
                  }
                  .info {
                    color: ${colorPallet.darkTextColor};
                    padding: 10px;
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
