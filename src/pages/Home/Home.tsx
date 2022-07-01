import React, { Children, FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { api } from '@services';

import { LoaderMemo as Loader, UserMemo as User, UserProps } from '@components';

import { slugify } from '@utils';

import { Container, UserContainer } from './Home.styles';

export interface User extends UserProps {
  id: number;
}

const Home: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('/users').then(response => setUsers(response.data));
  }, []);

  return (
    <Container>
      <h1>Users</h1>

      {users.length === 0 && <Loader />}

      <UserContainer>
        {Children.toArray(
          users?.map(user => (
            <li>
              <Link to={`/${user.id}/${slugify(user.name)}`}>
                <User {...user} />
              </Link>
            </li>
          ))
        )}
      </UserContainer>
    </Container>
  );
};

export { Home };
