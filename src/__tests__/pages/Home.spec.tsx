import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { Home } from '@pages';

describe('Home Page', () => {
  it('Should be called Loader component', async () => {
    const { getByTestId } = render(<Home />);

    await waitFor(() => {
      expect(getByTestId('loader')).toBeInTheDocument();
    });
  });
});
