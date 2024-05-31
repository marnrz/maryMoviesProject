import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../Theme/commonStyle";

export const Style = styled.div`
  .genresWrapper {
    .list {
      width: 80%;
      margin: 10px auto;
      li {
        .tag {
          border-radius: ${defaultCss.primaryBorderRadius};
          background-color: ${colorPallet.primaryColor};
          display: inline-block;
          padding: 10px 20px;
          margin: 5px;
          cursor: pointer;
          .name {
            color: ${colorPallet.darkTextColor};
          }
        }
      }
    }
  }
`;
export default Style;
