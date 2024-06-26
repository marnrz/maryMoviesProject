import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../../Theme/commonStyle";

export const Style = styled.div`
  .accordion {
    width: 100%;
    min-height: 300px;
    padding: 64px 0;

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
                height: 300px;
                li {
                  width: 153px;
                  height: 100%;
                  background-color: ${colorPallet.darkSecondaryBackgroundColor};
                  border-radius: ${defaultCss.primaryBorderRadius};
                  .poster {
                    width: 100%;
                    height: 210px;
                    img {
                      border-radius: 10px 10px 0 0;
                      width: 100%;
                      height: 100%;
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
`;
export default Style;
