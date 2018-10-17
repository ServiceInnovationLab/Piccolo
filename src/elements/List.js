import styled, { css } from 'styled-components';

const List = styled.ul`
  ${props => props.stripped && css`
    list-style: none;
    padding-left: 0;
  `}
  border-top: 3px solid #000;
  padding-top: 12px;
`;

export const Item = styled.li`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export default List;

