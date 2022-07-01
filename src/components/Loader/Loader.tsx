import React, { FC, memo } from 'react';

import { Container, Loading } from './Loader.styles';

const Loader: FC = () => {
  return (
    <Container>
      <Loading data-testid="loader">
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

const LoaderMemo = memo(Loader);

export { LoaderMemo };
