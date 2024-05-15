import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../Theme/commonStyle";

export const Style = styled.div`
  .header {
    .headerWrapper {
      .logoSide {
        .logo {
          width: 247px;
          height: auto;
        }
        .btnFavoriteMovies {
          border-radius: ${defaultCss.fullBorderRadius};
          background-color: ${colorPallet.secondaryBackgroundColor};
          width: 38px;
          height: 38px;
          .favCount {
            top: -7px;
            right: -7px;
            background-color: ${colorPallet.primaryColor};
            color: #fff;
            min-width: 16px;
            min-height: 16px;
            line-height: 16px;
            padding: 2px 6px;
            border-radius: ${defaultCss.fullBorderRadius};
          }
          .icon {
            width: 20px;
            height: 20px;
            margin-top: 10px;
            margin-left: 9px;
            color: ${colorPallet.primaryColor};
          }
        }
      }
      .usersSide {
        .bellIcon {
          .icon {
            width: 30px;
            height: 30px;
            color: ${colorPallet.signColor};
          }
        }
        .userBox {
          padding: 8px 12px;
          background-color: ${colorPallet.secondaryBackgroundColor};
          cursor: pointer;
          border-radius: ${defaultCss.primaryBorderRadius};
          .text {
            color: ${colorPallet.textColor};
          }
          .avatar {
            width: 40px;
            height: auto;
            border-radius: ${defaultCss.fullBorderRadius};
          }
        }
      }
    }
  }
`;
export default Style;
