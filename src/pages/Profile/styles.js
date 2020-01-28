import styled from 'styled-components';

export const Container = styled.div`
  .title-pen {
    color: #333;
    text-align: left;
    margin-left: 2em;
    margin-bottom: 1em;
  }

  .title-pen span {
    color: #55acee;
  }

  .user-profile {
    margin: auto;
    width: 90%;
    height: 100%;
    background: #fff;
    border-radius: 0.3em;
  }

  .user-profile .username {
    margin: auto;
    margin-top: -6.4em;
    margin-left: 9.8em;
    color: #658585;
    font-size: 1.53em;
    font-family: 'Coda', sans-serif;
    font-weight: bold;
  }

  .user-profile > .description {
    margin: auto;
    margin-top: 1.35em;
    margin-right: 4.43em;
    width: 14em;
    color: #c0c5c5;
    font-size: 0.87em;
  }
  .user-profile > img.avatar {
    padding: 0.7em;
    margin-left: 0.3em;
    margin-top: 0.3em;
    height: 16.23em;
    width: 14.23em;
    border-radius: 18em;
  }

  .user-profile div.line {
    font-size: 1.27em;
    font-weight: bold;
    align-content: center;
    margin: 2em auto;
    height: 3.7em;
    background: #ed2437;
    text-align: center;
    border-radius: 0 0 0.3em 0.3em;

    span {
      color: #fff;
    }
  }
  .user-profile ul.data {
    align-content: space-around;

    &:first-child {
      margin-top: 30em;
    }
  }
  .user-profile li {
    margin: 0 auto;
    padding: 1.3em;
    width: 33.33334%;
    display: inline-flex;
    text-align: center;
  }

  .user-profile span {
    color: #ed2437;
    white-space: nowrap;
    font-size: 1.27em;
    font-weight: bold;
  }
  .user-profile span:hover {
    color: #daebea;
  }

  footer > h1 {
    display: block;
    text-align: center;
    clear: both;
    color: #343f3d;
    line-height: 6;
    font-size: 1.6em;
  }

  footer > h1 a {
    text-decoration: none;
    color: #ea4c89;
  }
`;
