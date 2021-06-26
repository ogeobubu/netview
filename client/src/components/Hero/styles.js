import styled from "styled-components";
import HeroImage from "../../assets/hero-bg.jpg";

export const HeroContainer = styled.div`
  & {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(${HeroImage}) center center/cover;
    height: 100vh;
    width: 100%;
    text-align: center;
    color: #fff;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  width: 40%;
  margin-bottom: 18px;
  z-index: 11;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    width: 80%;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 576px) {
    font-size: 30px;
    width: 100%;
    margin-bottom: 14px;
    margin-top: 5rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 25px;
    width: 100%;
    margin-bottom: 12px;
  }
`;

export const Text = styled.h2`
  font-size: 40px;
  font-weight: 500;
  z-index: 11;
  margin-bottom: 2.25rem;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    width: 100%;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 20px;
    width: 100%;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 14px;
    width: 100%;
    margin-bottom: 1px;
  }
`;
