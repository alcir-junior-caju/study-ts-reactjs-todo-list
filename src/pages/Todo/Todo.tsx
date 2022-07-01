import React, { Children, FC, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { api } from '@services';

import { LoaderMemo as Loader, UserMemo as User, UserProps } from '@components';

import { toTitleCase } from '@utils';

import { Container, TodoItem, TodoItemLabel } from './Todo.styles';

interface Params {
  id: string;
  slug: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todo: FC = () => {
  const {
    params: { id: userId, slug }
  } = useRouteMatch<Params>();
  const [todos, setTodos] = useState<Todo[]>();
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    api.get(`/users/${userId}`).then(({ data }) => setUser(data));
    api.get(`todos?userId=${userId}`).then(response => setTodos(response.data));
  }, [userId]);

  return (
    <Container>
      <h1>{`${toTitleCase(slug)}: TODOs`}</h1>

      {!user ? <Loader /> : <User {...user} />}

      <ul>
        {Children.toArray(
          todos?.map((todo: Todo) => (
            <li>
              <TodoItem
                type="checkbox"
                checked={todo.completed}
                name="completed"
              />
              <TodoItemLabel htmlFor={todo.title} data-content={todo.title}>
                {todo.title}
              </TodoItemLabel>
            </li>
          ))
        )}
      </ul>
    </Container>
  );
};

export { Todo };
