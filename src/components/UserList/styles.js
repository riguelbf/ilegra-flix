import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 10rem;
`;

export const Body = styled.div`
  margin: auto;
  width: 100%;
  height: 100px;
  border-radius: 3px;

  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-between;
  justify-content: space-around;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10rem;
    border: solid 1px #ed2437;
    border-radius: 3px;
    margin: 25px 25px;
    font-size: 2rem;

    &:hover {
      background-color: #17181b;
      transition: 1s;
    }

    &:last-child {
      background-color: #000;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    width: 25rem;
    border: none;

    button {
      border-radius: 100%;
      margin-bottom: 15px;
      &:hover {
        background-color: #ed2437;
        border: none;
        transition: 1s;
      }
    }
    span {
      font-size: 20px;
    }
  }
`;

export const Header = styled.h1`
  margin-bottom: 60px;
  font-size: 3rem;
`;
