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
    &:last-child {
      margin-bottom: 64px;
    }
  }
`;
