import styled from "styled-components";

export const DownloadSection = styled.section`
  background-color: #000101;
  color: #ffffff;
  border-top: 8px solid #232223;
`;

export const DownloadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 83%;
  padding: 6.1875rem 0;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DownloadTitle = styled.h2`
  font-size: 55px;
  font-weight: 900;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }

  @media screen and (max-width: 576px) {
    font-size: 35px;
  }

  @media screen and (max-width: 320px) {
    font-size: 30px;
  }
`;

export const DownloadDetail = styled.p`
  font-size: 25px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const DownloadTitleDetails = styled.div`
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const DownloadImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
