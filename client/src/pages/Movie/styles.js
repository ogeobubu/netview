import styled from "styled-components";

export const MovieSection = styled.section`
  background-color: black;
  color: white;
`;

export const MovieDetails = styled.div`
  display: flex;
  padding: 3rem;

  .imageContain {
    width: 100%;
    height: 100%;
    margin-right: 2rem;

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media screen and (max-width: 580px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

export const MovieDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .movieTitle {
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  .generic {
    display: flex;
    align-items: center;

    .watchAge {
      width: 40px;
      height: 20px;
      border: 1px solid #cccccc;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      margin-right: 0.5rem;
    }

    .date {
      font-size: 17px;
      margin-right: 1rem;
    }

    .genre {
      margin-right: 1rem;
    }

    @media screen and (max-width: 415px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .ratingTitle {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;

    .ratings {
      background-color: #091c23;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      margin-right: 0.5rem;
      font-size: 20px;

      .inner.green {
        border: 2px solid green;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .inner.red {
        border: 2px solid red;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .inner.yellow {
        border: 2px solid yellow;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .overview {
    margin-top: 1.5rem;

    .overviewTitle {
      font-size: 20px;
    }
    p {
      margin-top: 1rem;
    }
  }
`;
