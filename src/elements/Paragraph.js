import styled from 'styled-components';

function sizing(props) {
  if(props.small) {
    return '22px';
  } else if(props.medium) {
    return '24px';
  } else if(props.large) {
    return '34px';
  } else {
    return '22px';
  }
}
export const Paragraph = styled.p`
  font-size: ${props => sizing(props)};
  color: ${props => props.light ? '#fff' : '#000'};
  height: ${props => props.height}px;
`;

