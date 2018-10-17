import React from 'react';
import styled from 'styled-components';
// import { TextField } from '../elements/Input';

const FieldWrapper = styled.div`
  margin: 25px 0;
  @media(min-width: 1024px) {
    display: flex;
  }
`;

const Label = styled.label`
  color: #c7c7cc;
  font-size: 18px;
  text-align: left;
  display: inline-block;
  margin-bottom: 10px;
  font-weight: bold;
  @media(min-width: 1024px) {
    font-size: 24px;
    display: inline-block;
    color: #c7c7cc;
    font-weight: bold;
    flex: 1;
    width: 147px;
    text-align: right;
    padding-top: 10px;
    > span {
      margin-right: 15px;
    }
  }
  `;

const TextFieldWrapper = styled.div`
  @media(min-width: 1024px) {
    font-size: 24px;
    display: flex;
    color: #c7c7cc;
    font-weight: bold;
    flex: 1;
    text-align: right;
    > span {
      margin-right: 15px;
    }
  }
`;

const Field = props => (
  <FieldWrapper>
    <Label htmlFor={props.name}>
      {props.label && <span>{props.label}</span>}
    </Label>
    <TextFieldWrapper>
      {/* <TextField
        small
        name={props.name}
        type={props.type}
      /> */}
    </TextFieldWrapper>
  </FieldWrapper>
);

export default Field;
