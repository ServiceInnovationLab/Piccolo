import React, { Fragment } from 'react';
import styled from 'styled-components';
import Container from '../elements/Container';
import { H2 } from '../elements/Headings';
import Paragraph from '../elements/Paragraph';

const Header = styled.section`
  height: 75px;
  background: #24273a;
  border-bottom: 12px solid #42e2ee;
`;

const Logo = styled.span`
  line-height: 75px;
  font-size: 34px;
  color: #fff;
  text-shadow: 0px 0px 20px #08fcff;
  font-weight: bold;
`;

export const PageHeader = () => (
  <Fragment>
    <Header>
      <Container>
        <Logo>Legislation of Code</Logo>
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
