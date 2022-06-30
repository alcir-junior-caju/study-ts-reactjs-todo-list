import styled from 'styled-components';

export const Container = styled.div`
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
`;
