import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  font-size: 24px;
  ${props => props.small && css`
    font-size: 22px;
  `}
  ${props => props.medium && css`
    font-size: 24px;
  `}
  ${props => props.large && css`
    font-size: 34px;
  `}
  color: ${props => props.light ? '#fff' : '#000'};
  height: ${props => props.height}px;
`;

