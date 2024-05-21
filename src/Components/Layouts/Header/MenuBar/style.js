import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../../Theme/commonStyle";
export const Style = styled.div`
  .menuBar {
    direction: rtl;
    background-color: rgba(36, 36, 36, 0.9);
    height: 80px;
    width: ${defaultCss.fullWidth};
    .menuWrapper {
      top: 5px;
      .list {
        li {
          padding: 5px;
          a {
            display: flex;
            gap: 5px;
            justify-content: center;
            align-items: center;
            direction: rtl;
            cursor: pointer;
            .icon {
              color: ${colorPallet.primaryColor};
              font-size: 15px;
            }
            h5 {
              color: ${colorPallet.primaryColor};
              font-size: 1.5rem;
              font-weight: normal;
            }
          }
        }
      }
      .input {
        font-family: "PT Sans", sans-serif;
        font-weight: 400;
        font-style: normal;
        min-width: 230px;
        width: 250px;
        height: 42px;
        direction: ltr;
        border-radius: ${defaultCss.secondaryBorderRadius};
        border-color: ${colorPallet.primaryColor};
        background-color: ${colorPallet.darkPrimaryBackgroundColor};
        &::placeholder {
          background-color: ${colorPallet.darkSecondaryBackgroundColor};
          font-family: "PT Sans", sans-serif;
          font-weight: 400;
          font-style: normal;
        }
        &:focus {
          color: ${colorPallet.primaryColor};
        }
      }
    }
  }
`;
export default Style;
