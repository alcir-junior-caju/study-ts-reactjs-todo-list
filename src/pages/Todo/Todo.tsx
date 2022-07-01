import React, {
  Children,
  FC,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { api } from '@services';

import { LoaderMemo as Loader, UserMemo as User, UserProps } from '@components';

import { slugify, toTitleCase } from '@utils';

import {
  Container,
  TodoError,
  TodoForm,
  TodoItem,
  TodoItemLabel,
  TodoMessage
} from './Todo.styles';

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
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    params: { id: userId, slug }
  } = useRouteMatch<Params>();
  const [todos, setTodos] = useState<Todo[]>();
  const [user, setUser] = useState<UserProps>();
  const [message, setMessage] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    api.get(`/users/${userId}`).then(({ data }) => setUser(data));
    api.get(`todos?userId=${userId}`).then(response => setTodos(response.data));
  }, [userId]);

  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      try {
        api
          .patch(`todos/1?userId=${userId}`, {
            completed: !event.currentTarget.checked
          })
          .then(response => {
            const { status } = response;

            if (status === 200) {
              setMessage(true);
            }

            setTimeout(() => setMessage(false), 3000);
          });
      } catch (error) {
        console.error(error);
      }
    },
    [userId]
  );

  const handleClick = useCallback(
    event => {
      event.preventDefault();

      try {
        if (!inputRef?.current?.value) {
          setError(true);

          setTimeout(() => setError(false), 3000);
          return;
        }

        api
          .post(`todos?userId=${userId}`, {
            title: inputRef.current?.value
          })
          .then(response => {
            const { status } = response;

            if (status === 201) {
              setMessage(true);
            }

            setTimeout(() => setMessage(false), 3000);
          });
      } catch (error) {
        console.error(error);
      }
    },
    [userId]
  );

  return (
    <Container>
      <h1>{`${toTitleCase(slug)}: TODOs`}</h1>

      {!user ? <Loader /> : <User {...user} />}

      {message && <TodoMessage>Sucesso na ação!</TodoMessage>}

      <TodoForm>
        <input
          type="text"
          name="todo"
          placeholder="Preencha o Todo"
          ref={inputRef}
        />
        <button type="submit" onClick={handleClick}>
          Adicionar
        </button>
      </TodoForm>
      {error && <TodoError>Preencha o campo!</TodoError>}

      <ul>
        {Children.toArray(
          todos?.map((todo: Todo) => (
            <li>
              <TodoItem
                type="checkbox"
                checked={todo.completed}
                name="completed"
                onChange={handleChange}
                id={slugify(todo.title)}
              />
              <TodoItemLabel
                htmlFor={slugify(todo.title)}
                data-content={todo.title}
              >
                {todo.title}
              </TodoItemLabel>
            </li>
          ))
        )}
      </ul>
      <Link to="/">Voltar</Link>
    </Container>
  );
};

export { Todo };
