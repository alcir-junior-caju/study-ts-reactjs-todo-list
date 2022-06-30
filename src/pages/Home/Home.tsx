import React, { Children, FC, useEffect, useState } from 'react';

import { api } from '@services';

import { Loader, User } from '@components';

import { Container, UserContainer } from './Home.styles';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

const Home: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('/users').then(response => setUsers(response.data));
  }, []);

  return (
    <Container>
      <h1>Users</h1>

      {!users.length && <Loader data-test-id="loading" />}

      <UserContainer>
        {Children.toArray(
          users.map(user => (
            <li>
              <User {...user} />
            </li>
          ))
        )}
      </UserContainer>
    </Container>
  );
};

export { Home };
