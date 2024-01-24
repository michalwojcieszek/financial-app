import styled from "styled-components";

export const BlinkingLight = styled.i`
  color: #ff4141;
  text-shadow: 0 0 20px #f00, 0 0 30px #f00, 0 0 40px #f00, 0 0 50px #f00,
    0 0 60px #f00, 0 0 70px #f00, 0 0 80px #f00;
  animation: blinker 1s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
  font-family: "FontAwesome";

  @keyframes blinker {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export default BlinkingLight;
