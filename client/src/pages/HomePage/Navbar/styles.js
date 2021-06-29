import styled from "styled-components";

export const NavbarSection = styled.div`
  color: white;
  position: fixed;
  top: 0;
  font-size: 14px;
  z-index: 999;
  width: 100%;
  background: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3), 50%);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 70px;

  @media screen and (max-width: 370px) {
    padding: 1rem;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 40px;
    height: 25px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .searchContainer {
    width: 100%;
    height: 100%;
    background: inherit;

    input {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      border: 1px #ccc solid;
      appearance: none;
      outline: none;
      background: none;
      color: white;
      padding: 0.1rem 0.3rem;
    }
  }

  .icon {
    cursor: pointer;
    margin: 0 15px;

    @media screen and (max-width: 875px) {
      margin: 0 4px;
    }

    @media screen and (max-width: 330px) {
      margin: 0;
    }
  }
`;
export const HomeLink = styled.span`
  margin-right: 20px;
  cursor: pointer;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const Profile = styled.div``;

export const Options = styled.div`
  span {
    display: none;
  }
  &:hover {
    span {
      display: flex;
    }
  }
`;
