import styled from "styled-components";
import { colorPallet } from "../../../Theme/commonStyle";

export const Style = styled.div`
  margin-top: 50px;
  padding: 20px 0;
  background-color: ${colorPallet.darkSecondaryBackgroundColor};
  border-top: 2px solid ${colorPallet.primaryColor};
  position: relative;
  z-index: 2;
  .footer {
    padding: 15px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      .contact {
        justify-content: flex-start;
        gap: 10px;
        margin-left: 40px;
        li {
          a {
            padding: 5px;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            font-weight: bold;
            font-size: 1.4rem;
          }
        }
      }
      span {
        color: #fff;
        font-size: 1.4rem;
        font-weight: 500;
        gap: 3px;
        margin: 15px 0 0 40px;
        ul {
          li {
            a {
              color: #fff;
              font-size: 1.4rem;
              padding: 3px;
              img {
                padding-right: 2px;
              }
            }
          }
        }
      }
    }
    .right {
      .socialMedia {
        justify-content: end;
        gap: 30px;
        margin: 0px 50px 0 0;
        li {
          a {
            img {
            }
          }
        }
      }
      span {
        margin: 10px 50px 0 0;
        gap: 15px;
        color: #9b9b9b;
        .legal {
          gap: 15px;
          li {
            a {
              color: #9b9b9b;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1060px) {
    .footer {
      .footerWrapper {
        justify-content: center;
        .left {
          display: none;
        }
        .right {
          .socialMedia {
            gap: 30px;
            margin: 30px 50px 0 0;
          }
          span {
            margin: 10px 51px 0 0;
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .footer {
      .container-full {
        width: 100%;
        .footer-container {
          justify-content: center;
          .left {
            display: none;
          }
          .right {
            .social-media {
              justify-content: center;
              gap: 30px;
              margin-top: 30px;
            }
            span {
              display: none;
            }
          }
        }
      }
    }
  }
`;
export default Style;
