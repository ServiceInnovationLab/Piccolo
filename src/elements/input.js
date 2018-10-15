import styled from 'styled-components';

export const Textfield = styled.input.attrs({ type: 'text'})`
  border: 4px solid #d1d1d1;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  &:focus {
    border: 4px solid #42e2ee;
  }
`;
