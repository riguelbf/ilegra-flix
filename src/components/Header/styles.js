import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  img {
    margin: 1rem;
    height: 4rem;
    padding-right: 0.1rem;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    display: flex;
    flex-direction:column;
    text-align: block;
    margin-right: 10px;

    strong: {
      display: block;
      color: #ed2337;
    }

    span: {
      font-size: 12px;
      color: #999;
    }
  }
`;
