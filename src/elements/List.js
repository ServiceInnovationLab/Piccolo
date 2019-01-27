import styled, { css } from 'styled-components';

const List = styled.ul`
  padding-left: 25px;
  ${props =>
    props.stripped &&
    css`
      list-style: none;
      padding-left: 0;
    `}
  ${props =>
    props.bordered &&
    css`
      border-top: 3px solid #000;
      padding-top: 12px;
    `}
`;

export const Item = styled.li`
  font-size: 22px;
  margin-bottom: 18px;
`;

export default List;
