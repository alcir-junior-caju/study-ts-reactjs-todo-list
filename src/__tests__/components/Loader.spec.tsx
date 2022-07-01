import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { LoaderMemo as Loader } from '@components';

describe('Loader component', () => {
  it('Should be called Loader component', async () => {
    const { getByTestId } = render(<Loader />);

    await waitFor(() => {
      expect(getByTestId('loader')).toBeInTheDocument();
    });
  });
});
