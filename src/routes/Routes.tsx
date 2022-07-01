import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Todo } from '@pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:id/:slug" component={Todo} />
    </Switch>
  );
};

export { Routes };
