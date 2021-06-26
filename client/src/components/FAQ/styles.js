import styled from "styled-components";

export const FAQSection = styled.section`
  background-color: #000101;
  color: #ffffff;
  padding: 87px 0;
`;

export const FAQTitle = styled.h2`
  font-size: 50px;
  font-weight: 800;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 576px) {
    font-size: 35px;
  }

  @media screen and (max-width: 320px) {
    font-size: 30px;
  }
`;

export const FAQContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Questions = styled.div`
  margin-top: 57px;
  margin-bottom: 70px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const QuestionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: #303030;
  width: 816px;
  height: 76px;
  margin: 1px 0;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const QuestionItemTitle = styled.h3`
  font-size: 25px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ReadQuestionDetail = styled.div`
  margin-bottom: 10px;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
`;

export const QuestionItemDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ReadQuestionDesc = styled.p`
  padding: 1.2em;
  font-size: 25px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 576px) {
    font-size: 15px;
  }

  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;

export const ReadQuestion = styled.div`
  display: flex;
  align-items: center;
  background-color: #303030;
  width: 816px;
  height: 100%;
  margin-bottom: 9px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
