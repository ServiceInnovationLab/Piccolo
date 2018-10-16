import styled from 'styled-components';

export const List = styled.ul`
  list-style: ${props => props.stripped ? 'none' : ''}
  padding-left: ${props => props.stripped ? 0 : ''}
  border-top: 3px solid #000;
  padding-top: 12px;
`;

export const Item = styled.li`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;


