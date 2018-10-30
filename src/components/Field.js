import React from 'react';
import styled from 'styled-components';
import TextField from '../elements/TextField';
import RadioGroup from '../elements/RadioGroup';

export const FieldWrapper = styled.div`
  margin: 25px 0;
  @media(min-width: 1024px) {
    display: flex;
  }
`;

export const Label = styled.label`
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
    padding-top: ${props => (props.type === 'radio' ? '24px' : '10px')};
    > span {
      margin-right: 15px;
    }
  }
  `;

export const TextFieldWrapper = styled.div`
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
    {console.log(props)}
    <Label htmlFor={props.name} type={props.type}>
      {props.label && <span>{props.label}</span>}
    </Label>

    {props.type === 'number' && <TextFieldWrapper>
      <TextField
        name={props.name}
        type={props.type}
        onChange={e => props.handleValue(e)}
        small
      />
    </TextFieldWrapper>}

    {/* {props.type === 'radio' && <TextFieldWrapper>
      <RadioGroup {...props} setRadio={props.setRadio} />
    </TextFieldWrapper>} */}
  </FieldWrapper>
);

export default Field;
