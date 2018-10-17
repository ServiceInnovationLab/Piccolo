import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: 24px;
  color: #000;
  ${props => props.small && css`
    font-size: 22px;
  `}
  ${props => props.medium && css`
    font-size: 24px;
  `}
  ${props => props.large && css`
    font-size: 34px;
  `}
  ${props => props.light && css`
    color: #fff;
  `}

  height: ${props => props.adjust ? '55px' : 'auto'};
`;

export default Paragraph;
