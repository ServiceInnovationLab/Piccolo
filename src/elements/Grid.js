import styled from 'styled-components';

const Grid = styled.div`
  margin: 30px 0;
  @media(min-width: 1024px) {
    display: flex;
  }
`;

export const Column = styled.div`
  padding: 0 40px 10px 40px;
  border-top: 1px solid #000;
  padding-top: 40px;
  margin-top: 50px;
  h2:first-child {
    margin-top: 0;
  }
  h2 + p {
    margin-top: 20px;
  }
  h2 ~ p {
    margin-bottom: 0;
  }
  p:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  @media(min-width: 1024px) {
    flex: 1;
    border-left: 1px solid #000;
    border-top: none;
    padding-top: 0;
  }
`;

export default Grid;

