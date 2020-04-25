import styled from "styled-components";

export const LoadingComponent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000000;
`;
