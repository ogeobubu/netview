import styled from "styled-components";
import bg from "../../assets/hero-bg.jpg";

export const Container = styled.div`
  position: absolute;
  padding: 1.75rem 3.5rem;
  z-index: 10;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 1.1rem 2rem;
  }
`;

export const LoginSection = styled.section`
  & {
    position: relative;
    background: url(${bg}) center center/cover;
    height: 100vh;
    width: 100%;

    @media screen and (max-width: 768px) {
      background: black;
    }
  }

  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export const NetViewLogo = styled.div`
  justify-self: flex-start;
  width: 8.375rem;
  height: 2.25rem;
`;
