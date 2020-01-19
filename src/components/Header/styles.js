import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #17181b;
  height: 4em;
  margin-bottom: 30px;

  img {
    top: 2rem;
    margin: 2rem;
    height: 5rem;
    padding: 0.5rem;
    transform: rotate(-20deg);
    background-color: #17181b;
    border-radius: 20%;
  }
`;

export const ProfileDetails = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  color: #fff;

  &:hover {
    opacity: 0.7;
  }

  div {
    display: flex;
    flex-direction:column;
    text-align: block;
    margin-right: 30px;

    span:first-of-type {
      display: block;
      color: #ed2337;
    }

    span: {
      font-size: 12px;
      color: #999;
    }
  }
`;
