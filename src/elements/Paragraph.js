import styled from 'styled-components';

function sizing(props) {
  if(props.small) {
    return '22px';
  } else if(props.medium) {
    return '24px';
  } else if(props.large) {
    return '36px';
  } else {
    return '22px';
  }
}
export const Paragraph = styled.p`
  font-size: ${props => sizing(props)};
`;

export const H2 = styled.h2`
  font-size: 34px;
`;

