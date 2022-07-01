import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1020px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  & > h1 {
    margin: 32px 0;
  }

  & > div {
    width: 100%;
  }

  & > ul {
    column-gap: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    margin: 64px 0;
    padding: 0;
    row-gap: 16px;
    width: 100%;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    & > li {
      align-self: flex-start;
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      display: flex;
      padding: 8px;
      transition: all 0.2s ease-in-out;

      &:hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export const TodoItem = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 1.5em;
  height: 1.5em;
  color: #312e38;
  border: 1px solid #eee;
  border-radius: 4px;
  appearance: none;
  outline: 0;
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);

  &::before {
    position: absolute;
    content: '';
    display: block;
    top: 2px;
    left: 7px;
    width: 6px;
    height: 12px;
    border-style: solid;
    border-color: #eee;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }

  &:checked {
    color: #fff;
    border-color: #93bf85;
    background: #93bf85;

    &::before {
      opacity: 1;
    }

    ~ label::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
`;

export const TodoItemLabel = styled.label`
  cursor: pointer;
  font-size: 16px;
  padding: 0 8px 0;
  position: relative;
  user-select: none;

  &::before {
    clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
    color: #312e38;
    content: attr(data-content);
    position: absolute;
    text-decoration: line-through;
    text-decoration-color: #312e38;
    text-decoration-thickness: 1px;
    transition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;
