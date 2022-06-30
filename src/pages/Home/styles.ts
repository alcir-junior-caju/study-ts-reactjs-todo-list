import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1020px;

  & > h1 {
    margin: 32px 0;
  }
`;

export const UserContainer = styled.ul`
  column-gap: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  margin: 0;
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
    cursor: pointer;
    display: flex;
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }

    &:last-child {
      margin-bottom: 64px;
    }

    & > img {
      align-self: flex-start;
      border-radius: 4px 0 0 4px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 1.5;
      padding: 8px 16px;
    }
  }
`;
