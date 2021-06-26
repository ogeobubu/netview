import styled from "styled-components";

export const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 11;

  @media screen and (max-width: 768px) {
    /* width: 100%; */
  }
`;

export const Text = styled.p`
  font-size: 21px;
  text-align: center;
  margin-bottom: 1.625rem;
`;

export const InputButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.div`
  width: 450px;
  height: 60px;
  background: #ffffff;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    width: 100%;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e30912;
  color: #fffefe;
  width: 214px;
  height: 60px;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 23px;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  max-width: 90%;
  padding: 1rem;
`;
