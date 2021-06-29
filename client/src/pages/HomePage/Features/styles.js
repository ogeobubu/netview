import styled from "styled-components";

export const FeatureSection = styled.section`
  padding: 2rem;
  display: flex;

  @media screen and (max-width: 610px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
