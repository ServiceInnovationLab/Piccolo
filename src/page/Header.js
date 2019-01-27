import React, { Fragment } from 'react';
import styled from 'styled-components';
import Container from '../elements/Container';
import { H2 } from '../elements/Headings';
import Paragraph from '../elements/Paragraph';

const Header = styled.section`
  height: 135px;
  padding: 10px;
  background: #24273a;
  border-bottom: 12px solid #42e2ee;
  @media (min-width: 375px) {
    height: 95px;
  }
  @media (min-width: 768px) {
    height: 75px;
  }
`;

const Logo = styled.span`
  line-height: 45px;
  font-size: 34px;
  color: #fff;
  text-shadow: 0px 0px 20px #08fcff;
  font-weight: bold;
  @media (min-width: 768px) {
    line-height: 75px;
  }
`;

export const PageHeader = () => (
  <Fragment>
    <Header>
      <Container>
        <Logo>Legislation as Code - Demo</Logo>
      </Container>
    </Header>
  </Fragment>
);

export const SectionHeader = props => (
  <Fragment>
    <Container>
      <H2>{props.title}</H2>
      <Paragraph medium>{props.subtitle}</Paragraph>
      <hr />
    </Container>
  </Fragment>
);
