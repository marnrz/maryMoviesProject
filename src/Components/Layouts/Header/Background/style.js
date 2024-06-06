import styled from "styled-components";

export const Style = styled.div`
  .backgroundHeader {
    &::before {
      content: "";
      position: absolute;
      background-image: url(/assets/images/logo/back_one_head.png);
      width: 774px;
      height: 691px;
      top: -90px;
      left: -90px;
    }
    &::after {
      content: "";
      width: 1120px;
      height: 607px;
      top: -220px;
      left: auto;
      right: -700px;
      position: absolute;
      background-image: url(/assets/images/logo/back_two_head.png);
    }
  }
`;
export default Style;
