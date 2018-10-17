import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Container } from '../elements/Container';

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
        <Logo>piccolo</Logo>
      </Container>
    </Header>
  </Fragment>
);


