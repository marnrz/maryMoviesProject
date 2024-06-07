import styled from "styled-components";
import { colorPallet, defaultCss } from "../../../../Theme/commonStyle";
export const Style = styled.div`
  .menuBar {
    direction: rtl;
    background-color: rgba(36, 36, 36, 0.9);
    height: 70px;
    width: ${defaultCss.fullWidth};
    .menuWrapper {
      padding: 15px 0;
      gap: 120px;
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
      .searchInput {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-style: normal;
        min-width: 230px;
        width: 280px;
        height: 42px;
        direction: ltr;
        border-radius: ${defaultCss.secondaryBorderRadius};
        border-color: ${colorPallet.primaryColor};
        background-color: ${colorPallet.darkPrimaryBackgroundColor};
        input {
          &::placeholder {
            color: #4f4f4f;
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
          &:focus {
            color: ${colorPallet.primaryColor};
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
        }
      }
    }
  }
`;
export default Style;
