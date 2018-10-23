import React from 'react';
import styled from 'styled-components';

const RadioGroupWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const RadioGroupInner = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: column;
  position: relative;
  @media(min-width: 1024px) {
    margin-top: .5em;
  }
`;

const Label = styled.label`
  display: inline-block;
  cursor: pointer;
  line-height: 1.5;
  margin: 0;
  font-size: 18px;
  min-width: 70px;
  :first-child > span {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-right: 4px solid #2f3045;
  }
  :last-child > span {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border-left: 4px solid #2f3045;
  }
  + label {
    margin-left: 24px;
  }
`;

const Radio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  left: -9999px;
  margin: 0;
  display: inline-block;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 10px 20px;
  :checked + span {
    background-color: #019dff;
    border-color: #2f3045;
    color: #fff;
    font-weight: bold;
  }
`;

const Span = styled.span`
  display: inline-block;
  border: 4px solid #2f3045;
  width: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 1.5;
  color: #000;
  background: #fff;
  font-weight: 600;
  padding: 9.5px 10px;
  text-transform: capitalize;
`;

const RadioGroup = props => (
  <RadioGroupWrapper>
    <RadioGroupInner>
      <div>
        {props.values.map((val, i) => <Label key={i}>
          <Radio
              name={props.name}
              value={val}
              onClick={e => props.handleClick(e, props.name)}
          />
          <Span>{val}</Span>
        </Label>)}
      </div>
    </RadioGroupInner>
  </RadioGroupWrapper>
);

export default RadioGroup;
