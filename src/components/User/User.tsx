import React, { FC } from 'react';

import { getAvatarGender } from '@utils';

import { Container } from './User.styles';

export interface UserProps {
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

const User: FC<UserProps> = (props: UserProps) => {
  const {
    name: userName,
    email,
    phone,
    website,
    company: { name: companyName }
  } = props;

  return (
    <Container>
      <img src={getAvatarGender(userName)} alt={userName} />
      <div>
        <strong>{userName}</strong>
        <small>{email}</small>
        <small>
          <strong>Phone: </strong>
          <span>{phone}</span>
        </small>
        <small>
          <strong>Site: </strong>
          <span>{website}</span>
        </small>
        <small>
          <strong>Company: </strong>
          <span>{companyName}</span>
        </small>
      </div>
    </Container>
  );
};

export { User };
