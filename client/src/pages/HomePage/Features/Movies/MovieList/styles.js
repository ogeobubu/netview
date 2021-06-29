import styled from "styled-components";

export const MovieListSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const MovieListItem = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
  width: 200px;
  height: 100%;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(var(--lightGrey), 1);
  background-color: #fff;
  position: relative;

  @media screen and (max-width: 610px) {
    margin-right: 0;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .menuOption {
    position: absolute;
    top: 7px;
    right: 13px;
    background-color: #9c9d9a;
    z-index: 99;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .movieDescription {
    position: relative;
    padding: 1rem;
  }

  .movieTitle {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  .movieDate {
    font-size: 15px;
  }

  .ratings {
    position: absolute;
    top: -34px;
    background-color: #091c23;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    .inner.green {
      border: 2px solid green;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .inner.red {
      border: 2px solid red;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .inner.yellow {
      border: 2px solid yellow;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
