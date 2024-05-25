import styled from "styled-components";
import { colorPallet, defaultCss } from "../../Theme/commonStyle";

export const Style = styled.div`
  padding: 35px 0;
  .contactWrapper {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: ${defaultCss.primaryBorderRadius};
    padding: 40px;
    .title {
      h1 {
        color: ${colorPallet.darkTextColor};
        border-bottom: 1px solid ${colorPallet.primaryColor};
      }
    }
    p {
      font-size: ${defaultCss.fontsizeP};
      color: ${colorPallet.darkTextColor};
    }
    .inputeBox {
      .formBox {
        .form {
          .title {
            h3 {
              color: ${colorPallet.darkTextColor};
            }
            .star {
              color: ${colorPallet.primaryColor};
              font-size: 2rem;
            }
          }
        }
        .issue {
          .title {
            h3 {
              color: ${colorPallet.darkTextColor};
            }
            .star {
              color: ${colorPallet.primaryColor};
              font-size: 2rem;
            }
          }
        }
      }
      .supportLinks {
        .quickLinks {
          h2 {
            text-transform: capitalize;
            color: ${colorPallet.primaryColor};
          }
          ul {
            li {
              margin: 5px 0;
              a {
                &:hover {
                  color: ${colorPallet.primaryColor};
                }
                color: ${colorPallet.darkTextColor};
                padding: 5px 0;
                font-size: 1.3rem;
              }
            }
          }
        }
        .support {
          h2 {
            text-transform: capitalize;
            color: ${colorPallet.primaryColor};
          }
          .text {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;
export default Style;
