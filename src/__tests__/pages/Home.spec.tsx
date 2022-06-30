import React from 'react';

import { render } from '@testing-library/react';

import { Home } from '@pages';

describe('Home Page', () => {
  it('Show HTML Home Page', () => {
    const { debug } = render(<Home />);

    debug();
  });
});
