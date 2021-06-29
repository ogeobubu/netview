import styled from "styled-components";

export const FilterSection = styled.section`
  flex: 1;
  max-width: 90%;
`;

export const FilterTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 1rem;

  @media screen and (max-width: 610px) {
    text-align: center;
  }
`;

export const Sort = styled.div`
  font-size: 20px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  /* border: 1px solid rgba(0, 0, 0, 1); */

  background-color: #fff;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 260px;
  min-width: 260px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  padding: 1rem;
  overflow: hidden;

  @media screen and (max-width: 610px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const SortBy = styled.div`
  padding: 1.5rem;

  .inputControl {
    select {
      background-color: #e5e7ea;
      width: 100%;
      height: 50px;
      margin-top: 1rem;
    }
  }
`;
