import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { UserMemo as User } from '@components';

const mockedUser = {
  name: 'User_name',
  email: 'User_email',
  phone: 'User_phone',
  website: 'User_website',
  company: {
    name: 'User_company_name'
  }
};

describe('User component', () => {
  it('Should be called User component', async () => {
    const { getByText, getByAltText } = render(<User {...mockedUser} />);

    await waitFor(() => {
      expect(getByAltText('User_name')).toBeInTheDocument();
      expect(getByText('User_email')).toBeInTheDocument();
      expect(getByText('User_phone')).toBeInTheDocument();
      expect(getByText('User_website')).toBeInTheDocument();
      expect(getByText('User_company_name')).toBeInTheDocument();
    });
  });
});
