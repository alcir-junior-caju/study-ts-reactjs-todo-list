import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { Home } from '@pages';

describe('Home Page', () => {
  it('Should be items list', async () => {
    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getByText('Leanne Graham')).toBeInTheDocument();
      expect(getByText('Clementina DuBuque')).toBeInTheDocument();
    });
  });

  it('Should be able remove loading', async () => {
    const { queryByTestId } = render(<Home />);

    await waitFor(() => {
      expect(queryByTestId('loading')).not.toBeInTheDocument();
    });
  });
});
