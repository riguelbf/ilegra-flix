import React from 'react';

import Header from './components/Header';
import Routes from './router';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
