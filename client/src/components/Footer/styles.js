import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #000101;
  color: #757566;
  border-top: 8px solid #232223;
  font-size: 15px;
`;

export const FooterContainer = styled.div`
  max-width: 90%;
  padding: 65px 223px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

export const FooterContact = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterLink = styled.div``;

export const FooterLinkName = styled.div`
  cursor: pointer;
  margin: 22px 0;
`;
