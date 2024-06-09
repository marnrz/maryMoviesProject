import styled from "styled-components";
import { colorPallet, defaultCss } from "../../Theme/commonStyle";

export const Style = styled.div`
  padding: 35px 0;
  .contactWrapper {
    /* background-color: rgba(0, 0, 0, 0.7);
    border-radius: ${defaultCss.primaryBorderRadius}; */
    padding: 40px;
    .title {
      h1 {
        color: ${colorPallet.darkTextColor};
        border-bottom: 1px solid ${colorPallet.primaryColor};
      }
    }
    .text {
      color: ${colorPallet.darkTextColor};
      font-size: 1.5rem;
      line-height: 1.6;
    }
    .questionList {
      .ant-collapse-item {
        border-bottom: 1px solid ${colorPallet.primaryColor};
        .ant-collapse-header {
          color: ${colorPallet.darkTextColor};
        }
      }
    }
  }
`;
export default Style;
