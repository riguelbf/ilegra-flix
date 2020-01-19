import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  width: 70%;

  li {
    display: inline;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    margin-left: 1rem;
    text-decoration: none;

    a {
      transition: opacity 0.3s;
      width: 14%;
      padding: 0.75rem 0;
      margin: 0;
      text-decoration: none;
      color: #fff;
      cursor: pointer;

      &:hover {
        color: #ed2337;
        opacity: 0.7;
      }
    }

    &.two:hover ~ hr {
      margin-left: 05%;
    }

    &.three:hover ~ hr {
      margin-left: 50%;
    }
  }
`;
