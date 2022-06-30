import React, { FC } from 'react';

import { Container, Loading } from './Loader.styles';

const Loader: FC = () => {
  return (
    <Container>
      <Loading>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Loading>
    </Container>
  );
};

export { Loader };
