import React from 'react';
import Header from '../Header';

export function withHeader(WrapperComponent) {
  const WithHeader = () => (
    <>
      <Header />
      <WrapperComponent />
    </>
  );

  return WithHeader;
}
