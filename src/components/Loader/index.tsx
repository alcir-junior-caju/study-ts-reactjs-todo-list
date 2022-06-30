import React, { FC } from 'react';

import { Container, Loading } from './styles';

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

export default Loader;
