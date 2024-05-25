import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../Theme/commonStyle";

export const Style = styled.div`
  .genresList {
    margin-top: 20px;
    border-radius: ${defaultCss.primaryBorderRadius};
    background-color: ${colorPallet.darkSecondaryBackgroundColor};
    padding: 10px;
    .title {
      margin: 5px 0 15px 0;
      h1 {
        color: ${colorPallet.darkTextColor};
      }
    }
    .list {
      li {
        margin: 8px 0;
        .tag {
          &:hover {
            color: ${colorPallet.primaryColor};
          }
          color: ${colorPallet.darkTextColor};
          font-size: 1.2rem;
          .text {
            margin-left: 3px;
          }
        }
      }
    }
  }
`;
export default Style;
