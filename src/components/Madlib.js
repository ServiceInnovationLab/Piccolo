import React, {Fragment} from 'react';
import styled from 'styled-components';
import Paragraph from '../elements/Paragraph';

const MadLibWrapper = styled.div`
  text-align: center;

  > p {
    margin-bottom: 5px;
    font-size: 28px;
    @media(min-width: 1024px) {
      font-size: 34px;
    }
  }

  > p,
  input[type=text] {
    display: inline-block;
  }

  input[type=text] {
    width: 60px;
    background: #d9f8fa;
    text-align: center;
  }

`;

const Input = styled.input.attrs({ type: 'text' })`
  display: inline-block;
  border: none;
  border-bottom: 2px solid #000;
  font-size: 24px;
  margin: 0 10px;
  @media(min-width: 1024px) {
    font-size: 34px;
  }
`;

const MadLib = props => (
  <MadLibWrapper>
    <Paragraph>I am</Paragraph>
    <Input defaultValue={props.values.age} />
    <Paragraph>years old,</Paragraph><br />
    {props.values.number_of_children > 0 && <Fragment>
      <Paragraph>I have</Paragraph>
      <Input defaultValue={props.values.number_of_children} />
      <Paragraph>children,</Paragraph><br />
    </Fragment>}
    <Paragraph>I have lived in the country for</Paragraph>
    <Input defaultValue={props.values.years_lived_in_country} />
    <Paragraph> years.</Paragraph>
  </MadLibWrapper>
);

export default MadLib;
