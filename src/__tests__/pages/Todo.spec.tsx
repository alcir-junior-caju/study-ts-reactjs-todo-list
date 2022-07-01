import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { Todo } from '@pages';

jest.mock('react-router-dom', () => {
  return {
    useRouteMatch: () => ({
      params: {
        id: '1',
        slug: 'slug'
      }
    }),
    Link: ({ children }: { children: React.ReactNode }) => children
  };
});

describe('Todo Page', () => {
  it('Should be called Loader component', async () => {
    const { getByTestId } = render(<Todo />);

    await waitFor(() => {
      expect(getByTestId('loader')).toBeInTheDocument();
    });
  });
});
