import styled from 'styled-components';

function theme(props) {
  alert(1)
  switch(props) {
    case 'dark':
      return 'black';
      break;

    default:
      return 'pink';
      break;
  }
};


export const Section = styled.section`
  background: ${props => theme(props)}
`;


