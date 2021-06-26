import styled from "styled-components";
// import breakpoint from "../../breakpoints";

export const Container = styled.div`
  position: absolute;
  padding: 1.75rem 3.5rem;
  z-index: 10;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 1.1rem 2rem;
  }
`;

export const LogoSignIn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;

export const NetViewLogo = styled.div`
  justify-self: flex-start;
  width: 8.375rem;
  height: 2.25rem;
`;

export const Button = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e50914;
  border-radius: 4px;
  cursor: pointer;
  color: #ffeec5;
  width: 5.25rem;
  height: 2.125rem;

  @media screen and (max-width: 320px) {
    margin-top: 1rem;
  }
`;
