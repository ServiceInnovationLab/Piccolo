import React from 'react';
import styled from 'styled-components';

export const RadioGroupWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

export const RadioGroupInner = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: column;
  position: relative;
  @media (min-width: 1024px) {
    margin-top: 0.5em;
  }
`;

export const RadioLabel = styled.label`
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

export const Radio = styled.input.attrs({ type: 'radio' })`
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

export const RadioSpan = styled.span`
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

class RadioGroup extends React.Component {
  render() {
    return (
      <RadioGroupWrapper>
        <RadioGroupInner>
          <div onChange={this.props.setRadio}>
            {this.props.values.map((val, i) => (
              <RadioLabel key={i}>
                <Radio name={this.props.name} value={val || ''} />
                <RadioSpan>{val}</RadioSpan>
              </RadioLabel>
            ))}
          </div>
        </RadioGroupInner>
      </RadioGroupWrapper>
    );
  }
}

export default RadioGroup;
