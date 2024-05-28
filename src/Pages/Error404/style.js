import styled from "styled-components";
import { colorPallet, defaultCss } from "../../Theme/commonStyle";

export const Style = styled.div`
  .error {
    position: relative;
    height: 100vh;
    min-height: 400px;
    background-image: url(https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png);
    background-size: cover;
    background-position: top center;
    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
    }
    .errorPageContent {
      height: 100%;
      h1 {
        font-size: 2.5rem;
        color: ${colorPallet.darkTextColor};
      }
      p {
        font-size: ${defaultCss.fontsizeP};
        color: ${colorPallet.darkTextColor};
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.57);
      }
      Button {
        border-radius: ${defaultCss.primaryBorderRadius};
        padding: 0 35px;
        &:hover {
          background-color: rgba(255, 255, 255, 0.75);
        }
      }
      .errorCode {
        color: ${colorPallet.darkTextColor};
        font-size: 35px;
        span {
          border-left: 2px solid #e50914;
        }
      }
    }
  }
`;
export default Style;
