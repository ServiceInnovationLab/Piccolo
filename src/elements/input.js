import styled from 'styled-components';

let props = props => props;

export const TextField = styled.input.attrs({ type: props.type })`
  border: 4px solid #d1d1d1;
  border-radius: 10px;
  height: 40px;
  font-size: 24px;
  padding-left: 10px;
  width: 100%;
  @media(min-width: 1024px) {
    width: ${props => props.small ? '147px' : ''};
  }
  &:focus {
    border: 4px solid #42e2ee;
  }
`;
