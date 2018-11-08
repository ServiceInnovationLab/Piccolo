import React, { Fragment } from 'react';
import styled from 'styled-components';
import Container from '../elements/Container';
import List, { Item } from '../elements/List';
import { CreativeCommons } from '../components/CreativeCommons';

const Footer = styled.section`
  padding-top: 45px;
  height: 270px;
  background: #eee;
`;


const PageFooter = () => (
  <Fragment>
    <Footer>
      <Container>
        <List stripped bordered>
          <Item>About this website</Item>
          <Item>Contact Us</Item>
        </List>

        <a href="https://creativecommons.org/licenses/by/4.0/">
          <CreativeCommons label="Creative Commons"/>
        </a>

      </Container>
    </Footer>
  </Fragment>
);

export default PageFooter;
