import styled from "styled-components";

export const SignUpSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const SignUpContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  width: 450px;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    width: 100%;
    background: none;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 450px) {
    padding: 0;
    margin-top: 0;
  }
`;

export const SignUpTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 35px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FormControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 315px;
  height: 50px;
  background-color: #333333;
  margin-bottom: 16px;
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 315px;
  height: 50px;
  background-color: #e50914;
  color: #fff;
  margin-top: 40px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  appearance: none;
  border: none;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    margin-top: 0;
  }
`;

export const RememberHelp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  color: #b3b3b3;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Remember = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Help = styled.p`
  cursor: pointer;
`;

export const FacebookAuth = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #737373;
`;

export const NewNetview = styled.div`
  font-size: 14px;
  color: #737373;
`;

export const SignUpNow = styled.span`
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;
