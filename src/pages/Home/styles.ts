import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1024px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  @media (width <= 768px) {
    flex-direction: column;
  }
`;
