import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1.5em;
    margin-left: 1rem;
    margin-top: 1.5rem;
    width: -webkit-fill-available;
    text-transform: uppercase;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    padding: 10px;
    div {
      margin-top: 10px;
    }
  }
`;
