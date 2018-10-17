import styled from 'styled-components';

function theme(props) {
  if(props.dark) {
    return '#2f3045';
  } else if(props.light) {
    return '#d9f8fa';
  } else if(props.grey) {
    return '#eeeeee';
  } else {
    return 'transparent';
  }
}


export const Section = styled.section`
  background: ${props => theme(props)};
  font-family: sans-serif;
  padding: 55px 0;
  text-align: center;

  h2 {
    color: ${props => props.dark ? '#42e2ee' : '#2f3045'};
    margin-bottom: 0;
  }

  h2 ~ p {
    margin-top: 10px;
    color: ${props => props.dark ? '#fff' : '#000'};
    padding-bottom: 35px;
  }

  p ~ hr {
    color: ${props => props.dark ? '#ccc' : '#000'};
    height: 1px;
    border: 0;
    border-top: 1px solid ${props => props.dark ? '#ccc' : '#000'};
  }

  h3 {
    color: ${props => props.dark ? '#fff' : '#2f3045'};
    font-weight: 400;
  }

  h2 ~ h3 {
    margin-top: 0;
  }
`;


