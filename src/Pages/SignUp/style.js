import styled from "styled-components";
import { colorPallet, defaultCss } from "../../Theme/commonStyle";

export const Style = styled.div`
  .signUpBox {
    margin: 100px 50px;
    .signUpWrapper {
      .logoBox {
        .link {
          cursor: pointer;
          .logo {
            width: 100%;
            height: 100%;
          }
        }
      }
      .titleHolder {
        width: 100%;
        max-width: 960px;
        text-align: center;
        margin-bottom: 40px;
        height: 2px;
        border-radius: 100%;
        background: ${colorPallet.primaryColor};
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        .text {
          color: ${colorPallet.darkTextColor};
          font-weight: 700;
          font-size: 200%;
          background: ${colorPallet.darkSecondaryBackgroundColor};
          padding: 10px;
          border-radius: 50%;
        }
      }
      .input {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-style: normal;
        height: 40px;
        border-radius: ${defaultCss.primaryBorderRadius};
      }
      .btn {
        
        justify-content: center;
        gap: 50px;
        button {
          padding: 0 40px;
        }
      }
    }
  }
`;
export default Style;
