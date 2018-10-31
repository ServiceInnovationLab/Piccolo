import React, { Fragment } from 'react';
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

  p,
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
  font-weight: bold;
  @media(min-width: 1024px) {
    font-size: 34px;
  }
`;

const MadLib = props => <MadLibWrapper>
  {props.values && <div><Paragraph>I am a</Paragraph>
    <Input readonly="readonly" defaultValue={props.values.age} />
    <Paragraph>year old</Paragraph>
    <Input readonly="readonly" style={{ width: '130px' }} defaultValue={props.values.gender} /><br />
    {props.values.number_of_children > 0 && <Fragment>
      <Paragraph>who has had</Paragraph>
      <Input readonly="readonly" defaultValue={props.values.number_of_children} />
      <Paragraph>children.</Paragraph><br />
    </Fragment>}
    <Paragraph>I have lived in the country for</Paragraph>
    <Input readonly="readonly" defaultValue={props.values.years_lived_in_country} />
    <Paragraph> years, </Paragraph><br />
    <Paragraph> and worked there for </Paragraph>
    <Input readonly="readonly" defaultValue={props.values.years_worked} />
    <Paragraph> years.</Paragraph></div>}
</MadLibWrapper>;

export default MadLib;
