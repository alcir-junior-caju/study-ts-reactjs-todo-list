import React, { Children, FC, useEffect, useState } from 'react';

import { api } from '@services';

import { getAvatarGender } from '@utils';

import { Container, UserContainer } from './styles';

export interface Users {
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
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    api.get('/users').then(response => setUsers(response.data));
  }, []);

  return (
    <Container>
      <h1>Users</h1>

      <UserContainer>
        {Children.toArray(
          users.map(user => (
            <li>
              <img src={getAvatarGender(user.name)} alt={user.name} />
              <div>
                <strong>{user.name}</strong>
                <small>{user.email}</small>
                <small>
                  <strong>Phone: </strong>
                  <span>{user.phone}</span>
                </small>
                <small>
                  <strong>Site: </strong>
                  <span>{user.website}</span>
                </small>
                <small>
                  <strong>Company: </strong>
                  <span>{user.company.name}</span>
                </small>
              </div>
            </li>
          ))
        )}
      </UserContainer>
    </Container>
  );
};

export default Home;
