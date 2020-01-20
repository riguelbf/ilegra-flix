import styled from 'styled-components';

export const Container = styled.div`
  /* flex: 1 1 auto; */
  display: inline-block;
  height: 25rem;
  width: 17.5rem;
  cursor: pointer;
  transition: transform 0.3s;
  -webkit-transition: transform 0.3s;

  @include responsive(tab_port) {
    height: 20rem;
    width: 14rem;
  }

  &:hover {
    transform: scale(1.25);

    @include responsive(tab_port) {
      transform: scale(1.15);
    }
  }

  img {
    height: 25rem;
    &:hover {
      border: 2px solid #ed2337;
    }
  }
`;
