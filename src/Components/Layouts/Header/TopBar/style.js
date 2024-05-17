import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../../Theme/commonStyle";

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
        .btnSignUp,
        .btnSignIn {
          background-color: ${colorPallet.darkSecondaryBackgroundColor};
          border-radius: ${defaultCss.secondaryBorderRadius};
          width: 120px;
          height: 36px;
          cursor: pointer;
          &:hover {
            background-color: ${colorPallet.primaryColor};
            .icon {
              color: ${colorPallet.lightSignColor};
            }
          }
          p {
            color: ${colorPallet.darkTextColor};
            font-size: 1.6rem;
          }
          .icon {
            font-size: 18px;
            color: ${colorPallet.primaryColor};
          }
        }
      }
    }
  }
`;
export default Style;
