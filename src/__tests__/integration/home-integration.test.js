import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, fireEvent } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home component integration test', () => {
  test('should render component without movie list', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const groups = container.querySelector(
      'div[data-testid="movielist-group"]'
    );
    expect(groups).toEqual(null);
  });

  // test('should to show modal component when on click in image', () => {
  //   const { container } = render(<Home />);
  //   fireEvent.click(container.querySelector('img[data-testid="poster-path"]'));

  //   // const modalComponent = container.querySelector(
  //   //   'div[data-testid="modal-details"]'
  //   // );
  //   expect(document.title).toEqual('');
  // });
});
